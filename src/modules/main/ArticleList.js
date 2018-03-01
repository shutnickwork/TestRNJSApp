import React from "react";
import {FlatList, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {ArticleListProps} from "./components/ArticleListProps";
import {LoadingView} from "../../common/components/LoadingView";
import {ArticleListItem} from "./components/ArticleListItem";
import {Colors} from "../../common/Colors"
import {FontNames} from "../../common/FontNames"
import {GetDataRequest} from "../../core/api/requestRepo";
import {testAppPages} from "../../navigation/TestAppPages";


export class ArticleList extends React.Component {
    static navigationOptions = () => {
        return ArticleListProps.getNavigationProps("Статьи");
    };
    onItemSelected = (item) => {
        this.props.navigation.navigate(testAppPages.articleDetails,
            {
                article: item
            });
    };
    keyExtractor = (item) => item._id.toString();
    loadArticles = async () => {
        const data = await GetDataRequest.getArticles(1, 10);
        const articles = data && data.articles;
        this.setState({articleList : articles});
    };
    pullToRefresh = () => {
        //this.dispatchProps.loadArticles(LoadState.pullToRefresh);
    };
    loadMore = (): void => {
        if (this.state.articleList.length > 0) {
            //this.dispatchProps.loadArticles(LoadState.loadingMore);
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

    onPress = (): void => {
        const {currentArticle} = this.state;
        if (currentArticle) {
            //this.dispatchProps.navigateToListItemPage(currentArticle);
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
        const { articleList} = this.state;
        if (articleList && articleList.length === 0 ) {
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

//refreshing={loadState == LoadState.pullToRefresh}

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