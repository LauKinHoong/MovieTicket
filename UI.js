import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableHighlight, Alert, Modal, Pressable } from 'react-native';

class InputWithLabel extends Component {
    constructor(props) {
        super(props);
        this.orientation = this.props.orientation
            ? this.props.orientation == 'horizontal'
                ? 'row'
                : 'column'
            : 'column';
    }
    render() {
        return (
            <View style={[styles.container, { flexDirection: this.orientation }]}>
                <Text style={[styles.label, { flex: this.props.flexLabel }]}>{this.props.label}: </Text>
                <TextInput style={[styles.input, this.props.style, { editable: this.props.editable, flex: this.props.flexText }]}
                    {...this.props}
                >{this.props.text}</TextInput>
            </View>
        );
    }
}
class HistoryTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            movie: [],
        }
    }
    render() {
        return (
            <View style={[styles.historyContainer]}>
                <View style={[styles.trolleyHeaderContainer]}>
                    <Text style={[styles.trolleyLabel, { flex: 1, textAlign: 'right', paddingRight: 10 }]}>Date</Text>
                    <Text style={[styles.trolleyLabel, { flex: 2, textAlign: 'left', paddingLeft: 10 }]}>Movie</Text>
                </View>
                <View style={styles.historyContentContainer}>
                    <FlatList
                        data={this.props.movies}
                        showsVerticalScrollIndicator={true}
                        keyExtractor={(item) => { item.id.toString() }}
                        renderItem={({ item }) =>
                            <TouchableHighlight
                                underlayColor={'#cccccc'}
                                onPress={() => {
                                    this.setState({ modalVisible: true })
                                    this.setState({ movie: item })
                                }}>
                                <View style={styles.historyContentItem}>
                                    <Modal
                                        animationType="pop"
                                        transparent={true}
                                        visible={this.state.modalVisible}
                                        onRequestClose={() => {
                                            Alert.alert("Modal has been closed.");
                                            this.setState({ modalVisible: !this.state.modalVisible })
                                        }}
                                    >
                                        <View style={styles.centeredView}>
                                            <View style={[styles.modalView]}>
                                                <Text style={[{ fontSize: 20, paddingBottom: 20 }]}>Movie Information</Text>
                                                <View style={[{ flexDirection: 'row', width: 200 }]}>
                                                    <View style={[{ flexDirection: 'column', flex: 1 }]}>
                                                        <Text style={styles.modalTitle}>Name:</Text>
                                                        <Text style={styles.modalTitle}>Date:</Text>
                                                        <Text style={styles.modalTitle}>Time:</Text>
                                                        <Text style={styles.modalTitle}>Price:</Text>
                                                        <Text style={styles.modalTitle}>Ticket:</Text>
                                                        <Text style={styles.modalTitle}>Total:</Text>
                                                    </View>
                                                    <View style={[{ flexDirection: 'column', flex: 2 }]}>
                                                        <Text style={styles.modalContent}>{this.state.movie.name}</Text>
                                                        <Text style={styles.modalContent}>{this.state.movie.date}</Text>
                                                        <Text style={styles.modalContent}>{this.state.movie.time}</Text>
                                                        <Text style={styles.modalContent}>RM{this.state.movie.price}</Text>
                                                        <Text style={styles.modalContent}>{this.state.movie.ticket}</Text>
                                                        <Text style={styles.modalContent}>RM{this.state.movie.price * this.state.movie.ticket}</Text>
                                                    </View>
                                                </View>
                                                <Pressable
                                                    style={[styles.button, styles.buttonClose]}
                                                    onPress={() => this.setState({ modalVisible: !this.state.modalVisible })}
                                                >
                                                    <Text style={styles.textStyle}>Back</Text>
                                                </Pressable>
                                            </View>
                                        </View>
                                    </Modal>
                                    <Text style={[styles.historyLabel, { flex: 1, textAlign: 'right', paddingRight: 10 }]}>{item.date}</Text>
                                    <Text style={[styles.historyLabel, { flex: 2, textAlign: 'left', paddingLeft: 10, }]}>{item.name}</Text>
                                </View>
                            </TouchableHighlight>
                        }
                    />
                </View>
            </View>
        );
    }
}
class TrolleyTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            movie: [],
        }
    }

    render() {
        return (
            <View style={[styles.trolleyContainer]}>
                <View style={[styles.trolleyHeaderContainer, { flexDirection: 'row' }]}>
                    <Text style={styles.trolleyLabel}>Date</Text>
                    <Text style={styles.trolleyLabel}>Movie</Text>
                    <Text style={styles.trolleyLabel}>Time</Text>
                </View>
                <TouchableHighlight
                    underlayColor={'#cccccc'}
                    onPress={() => {
                        this.setState({ modalVisible: true })
                    }}>
                    <View style={styles.historyContentItem}>
                        <Modal
                            animationType="pop"
                            transparent={true}
                            visible={this.state.modalVisible}
                            onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                this.setState({ modalVisible: !this.state.modalVisible })
                            }}
                        >
                            <View style={styles.centeredView}>
                                <View style={[styles.modalView]}>
                                    <Text style={[{ fontSize: 20, paddingBottom: 20 }]}>Movie Information</Text>
                                    <View style={[{ flexDirection: 'row', width: 200 }]}>
                                        <View style={[{ flexDirection: 'column', flex: 1 }]}>
                                            <Text style={styles.modalTitle}>Name:</Text>
                                            <Text style={styles.modalTitle}>Date:</Text>
                                            <Text style={styles.modalTitle}>Time:</Text>
                                            <Text style={styles.modalTitle}>Ticket:</Text>
                                            <Text style={styles.modalTitle}>Price:</Text>
                                        </View>
                                        <View style={[{ flexDirection: 'column', flex: 2 }]}>
                                            <Text style={styles.modalContent}>{this.props.movie.name}</Text>
                                            <Text style={styles.modalContent}>{this.props.movie.date}</Text>
                                            <Text style={styles.modalContent}>{this.props.movie.time}</Text>
                                            <Text style={styles.modalContent}>{this.props.movie.ticket}</Text>
                                            <Text style={styles.modalContent}>RM{this.props.movie.price}</Text>
                                        </View>
                                    </View>
                                    <Pressable
                                        style={[styles.button, styles.buttonClose]}
                                        onPress={() => this.setState({ modalVisible: !this.state.modalVisible })}
                                    >
                                        <Text style={styles.textStyle}>Back</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </Modal>
                        <Text style={[styles.historyLabel]}>{this.props.movie.date}</Text>
                        <Text style={[styles.historyLabel]}>{this.props.movie.name}</Text>
                        <Text style={[styles.historyLabel]}>{this.props.movie.time}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}
class TrolleySummary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ticket: this.props.movie.ticket,
            price: this.props.movie.price,
            totalPrice: this.props.movie.price * this.props.movie.ticket,
        }
    }
    render() {
        return (
            <View style={[styles.summaryContainer]}>
                <View style={[styles.summaryHeaderContainer]}>
                    <Text style={styles.summaryLabel}>Price per ticket:</Text>
                    <Text style={styles.summaryLabel}>Number of ticket:</Text>
                    <Text style={styles.summaryLabel}>Total price:</Text>
                </View>
                <View style={[styles.summaryContentContainer]}>
                    <Text style={styles.summaryContent}>RM{this.props.movie.price}</Text>
                    <Text style={[styles.summaryContent]}>{this.props.movie.ticket}</Text>
                    <Text style={styles.summaryContent}>RM{this.props.movie.price * this.props.movie.ticket}</Text>
                </View>
            </View >
        );
    }
}
module.exports = {
    InputWithLabel: InputWithLabel,
    HistoryTable: HistoryTable,
    TrolleyTable: TrolleyTable,
    TrolleySummary: TrolleySummary,
}

const styles = StyleSheet.create({
    container: {
        height: 55,
        backgroundColor: 'lightblue',
        flex: 1,
    },
    historyContentContainer: {
        backgroundColor: 'lightgray',
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalTitle: {
        marginBottom: 15,
        textAlign: "right",
        paddingRight: 10,
    },
    modalContent: {
        marginBottom: 15,
        textAlign: "left",
        paddingLeft: 10,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    historyContainer: {
        alignSelf: 'stretch',
        flex: 1
    },
    trolleyContainer: {
        alignSelf: 'stretch',
        paddingTop: 10,
        paddingBottom: 10,
        flex: 6,
    },
    summaryContainer: {
        alignSelf: 'stretch',
        paddingTop: 10,
        paddingBottom: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        marginBottom: 20,
        flex: 2.5,
        flexDirection: 'row',
    },
    trolleyHeaderContainer: {
        backgroundColor: 'lightblue',
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
    },
    trolleyContentContainer: {
        backgroundColor: 'lightgray',
        paddingTop: 10,
        paddingBottom: 10,
    },
    summaryHeaderContainer: {
        paddingTop: 10,
        paddingBottom: 10,
        flex: 3,
        flexDirection: 'column',
    },
    summaryContentContainer: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 5,
        flex: 1,
        flexDirection: 'column',
        borderLeftWidth: 0.5,
    },
    trolleyLabel: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
    },
    summaryLabel: {
        flex: 1,
        textAlign: 'right',
        textAlignVertical: 'center',
        fontSize: 20,
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 15,
    },
    historyLabel: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 16,
    },
    historyContentItem: {
        backgroundColor: 'lightgray',
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
    },
    summaryContent: {
        flex: 1,
        textAlign: 'left',
        textAlignVertical: 'center',
        fontSize: 20,

    },
    label: {
        flex: 1,
        fontSize: 23,
        fontWeight: 'bold',
        marginLeft: 3,
        textAlignVertical: 'center',
        textAlign: 'right',
    },
    labelColon: {
        flex: 0,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 3,
        textAlignVertical: 'center',
    },
    input: {
        flex: 3,
        // right:20,
        fontSize: 20,
        color: 'blue',
        textAlign: 'left',
    },
});