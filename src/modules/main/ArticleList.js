import React from "react";
import {FlatList, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {ArticleListProps} from "./components/ArticleListProps";
import {LoadingView} from "../../common/components/LoadingView";
import {ArticleListItem} from "./components/ArticleListItem";
import {Colors} from "../../common/Colors"
import {FontNames} from "../../common/FontNames"
import {GetDataRequest} from "../../core/api/requestRepo";
import {testAppPages} from "../../navigation/TestAppPages";
import {calculatePage, DEFAULT_PAGE_SIZE} from "../../common/calculatePage";
import * as _ from "lodash";


export class ArticleList extends React.Component {
    static navigationOptions = () => {
        return ArticleListProps.getNavigationProps("Статьи");
    };
    onItemSelected = (item) => {
        this.setArticle(item);
        this.navigateToArticleDetails(item);
    };

    setArticle = (item) => {
        this.setState({currentArticle: item});
    };

    navigateToArticleDetails = (item) => {
        this.props.navigation.navigate(testAppPages.articleDetails,
            {
                article: item
            });
    };
    keyExtractor = (item) => item._id.toString();
    loadArticles = async (page, pageSize) => {
        const data = await GetDataRequest.getArticles(page, pageSize);
        const articles = data && data.articles;
        this.setState({articleList: articles});
    };
    pullToRefresh = async () => {
        const data = await GetDataRequest.getArticles( 1, DEFAULT_PAGE_SIZE);
        const articles = data && data.articles;
        const articleList = _.uniqBy(articles.concat(this.state.articleList), a => a._id);
        this.setState({articleList: articleList});
    };


    loadMoreArticles = async (page, pageSize) => {
        const data = await GetDataRequest.getArticles(page, pageSize);
        const articles = data && data.articles;
        const articleList = _.uniqBy(this.state.articleList.concat(articles), a => a._id);
        if (articles && articles.length > 0) {
            this.setState({articleList: articleList});
        }
    };
    loadMore = () => {
        if (this.state.articleList && this.state.articleList.length > 0) {
            const currentCount = this.state.articleList.length || 0;
            const page = calculatePage(currentCount, DEFAULT_PAGE_SIZE);
            this.loadMoreArticles(page, DEFAULT_PAGE_SIZE);
        }
    };
    renderItem = ({item}) => {
        return (
            <ArticleListItem
                label={item.label}
                title={item.title}
                status={item.status}
                authorName={item.authorName}
                created={item.created}
                item={item}
                onPress={this.onItemSelected}
            />
        );
    };
    emptyComponentForError = () => {
        return (
            <View style={styles.container}>
                <Text>{"Нет статей"}</Text>
            </View>
        );
    };

    onPress = () => {
        const {currentArticle} = this.state;
        if (currentArticle) {
            this.navigateToArticleDetails(currentArticle);
        }
    };

    renderHeader = () => {
        const {currentArticle} = this.state;

        return (
            <TouchableOpacity
                style={styles.header}
                disabled={!currentArticle}
                onPress={this.onPress}
                activeOpacity={0.7}
            >
                <Text style={{textAlign: "center"}}>{currentArticle ? currentArticle.title : "Ничего не выбрано"}</Text>
            </TouchableOpacity>
        );
    };

    constructor(props) {
        super(props);

        this.state = {
            articleList: [],
            currentArticle: null
        };
    }

    componentDidMount() {
        this.loadArticles();
    }

    render() {
        const {articleList} = this.state;
        if (articleList && articleList.length === 0) {
            return <LoadingView isLoading={true}/>;
        } else {
            return (
                <View style={styles.container}>
                    {this.renderHeader()}
                    <FlatList
                        data={articleList}
                        ListEmptyComponent={this.emptyComponentForError()}
                        renderItem={this.renderItem}
                        keyExtractor={this.keyExtractor}
                        refreshing={false}
                        onEndReached={this.loadMore}
                        onRefresh={this.pullToRefresh}
                        onEndReachedThreshold={0.3}
                    />
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontFamily: FontNames.regular,
        color: Colors.fontDark,
        marginLeft: 16,
    },
    header: {
        height: 40,
        backgroundColor: Colors.white,
        borderBottomWidth: 1,
        borderBottomColor: Colors.separator,
    },
    icon: {
        height: 24,
        width: 24,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
});