import React from "react";
import {FlatList, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {ArticleListProps} from "./components/ArticleListProps";
import {LoadingView} from "../../common/components/LoadingView";
import {ArticleListItem} from "./components/ArticleListItem";
import {Colors} from "../../common/Colors"
import {FontNames} from "../../common/FontNames"


export interface IArticlesProps {
    articleList;
    currentArticle;
}

export interface IArticleState {
    //setArticle: (article: IArticle) => void;
    //navigateToListItemPage: (listItem: IArticle) => void;
    //loadArticles: (loadState: LoadState) => void;

}

export class ArticleList extends React.Component<IArticlesProps, IArticleState> {
    static navigationOptions = (): any => {
        return ArticleListProps.getNavigationProps("Статьи");
    };
    onItemSelected = (item): void => {
        //this.dispatchProps.setArticle(item);
        //this.dispatchProps.navigateToListItemPage(item);
    };
    keyExtractor = (item) => item.toString();
    loadArticles = (): void => {
        //this.dispatchProps.loadArticles(this.stateProps.loadState);
    };
    pullToRefresh = (): void => {
        //this.dispatchProps.loadArticles(LoadState.pullToRefresh);
    };
    loadMore = (): void => {
        if (this.state.articleList.length > 0) {
            //this.dispatchProps.loadArticles(LoadState.loadingMore);
        }
    };
    renderItem = ({item}: { item, index: number }) => {
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

    constructor(props: IArticlesProps) {
        super(props);

        this.state = {
            article: null
        };
    }

    componentDidMount(): void {
        //this.loadArticles();
    }

    /*
    <FlatList
  data={[{key: 'a'}, {key: 'b'}]}
  renderItem={({item}) => <Text>{item.key}</Text>}
/>
    * */

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