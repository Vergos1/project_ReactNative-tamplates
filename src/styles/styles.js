import {StyleSheet} from "react-native";


export const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 120,
        backgroundColor: '#f4f5fa',
    },
    headerContainer: {
        flex: 1,
    },
    header: {
        backgroundColor: "#f4f5fa",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        paddingTop: 42,
        paddingBottom: 8,
        paddingLeft: 40,
        paddingRight: 40,
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2,
    },
    titleBlockLarge: {
        fontFamily: "Poppins-ExtraBold",
        fontSize: 24,
        lineHeight: 30,
        color: "#3D444F"
    },
    titleBlockMedium: {
        maxWidth: 116,
        fontFamily: "Poppins-ExtraBold",
        fontSize: 16,
        lineHeight: 22,
        color: "#3D444F"
    },
    titleBlockSmall: {
        fontFamily: "Poppins-ExtraBold",
        fontSize: 14,
        lineHeight: 20,
        color: "#3D444F"
    },
    descriptionBlock: {
        maxWidth: 116,
        opacity: 0.66,
        fontFamily: "Poppins-Medium",
        fontSize: 12,
        lineHeight: 18,
        color: "#5F6F89"
    },
    title: {
        fontSize: 18,
        color: '#fff',
    },
    button: {
        overflow: "hidden",
        borderRadius: 16,
        maxWidth: 71,
        maxHeight: 40,
        flexDirection: "row",
    },
    textContentBlock: {
        gap: 14
    },
    imageBackground: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 10,
    },
    buttonCount: {
        marginLeft: 8,
        fontFamily: "Poppins-SemiBold",
        fontSize: 11,
        color: "#FFFFFF",
        marginTop: 2,
    },
    buttonsContainer: {
        flexDirection: "row",
        gap: 20
    },
    promptCount: {
        width: 23,
        height: 22,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#6DBC33",
        position: "absolute",
        right: -8,
        top: -4
    },
    notificationCount: {
        width: 23,
        height: 22,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FF708A",
        position: "absolute",
        right: -8,
        top: -4
    },
    notificationButton: {
        padding: 12,
        position: "relative"
    },
    promptButton: {
        padding: 12,
        position: "relative"
    },
    countText: {
        fontFamily: "Poppins-Bold",
        fontSize: 11,
        color: "#FFFFFF",
        marginTop: 2,
    },
    sectionBlockLarge: {
        position: "relative",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 24,
        backgroundColor: "#fff",
        width: 310,
        height: 200,
        borderRadius: 32,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 0,
        shadowOpacity: 1,
        elevation: 0.4,
    },
    sectionBlockSmall: {
        position: "relative",
        alignItems: "flex-end",
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 20,
        backgroundColor: "#fff",
        width: 147,
        height: 168,
        borderRadius: 32,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 0,
        shadowOpacity: 1,
        elevation: 0.4,
    },
    questionBlockImage: {
        position: "absolute",
        right: -12
    },
    threeBlockImage: {
        position: "absolute",
        top: -15,
        right: -8
    },
    oneBlockImage: {
        position: "absolute",
        top: -15,
        right: -8
    },
    questionSpriteBlockImage: {
        position: "absolute",
        top: -23,
        right: -24,
    },
    brandBlockImage: {
        position: "absolute",
        bottom: -40,
        right: -70,
    },
    tabsWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    tabActive: {
        width: 71,
        height: 40,
        backgroundColor: "#f4f5fa",
        borderStyle: "solid",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#7ECC45",
        borderRadius: 16,
    },
    tabButton: {
        width: 71,
        height: 40,
        backgroundColor: "#f4f5fa",
        borderStyle: "solid",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "transparent",
        borderRadius: 16,
    },
    tabActiveText: {
        width: "100%",
        fontFamily: "Poppins-Medium",
        fontSize: 12,
        textAlign: "center",
        letterSpacing: -0.24,
        color: "#7ACA40",
        marginTop: 2
    },
    tabButtonText: {
        width: "100%",
        opacity: 0.4,
        fontFamily: "Poppins-Medium",
        textAlign: "center",
        letterSpacing: -0.24,
        fontSize: 12,
        color: "#3D444F",
        marginTop: 2
    },
    tabsDescription: {
        fontFamily: "Poppins-Regular",
        fontSize: 16,
        color: "#5F6F89"
    },
    tabsLabel: {
        fontFamily: "Poppins-Bold",
        fontSize: 16,

        color: "#5F6F89"
    },
    tabsInput: {
        padding: 26,
        backgroundColor: "#F1F3FF",
        borderRadius: 16,
        elevation: 0.5,
    },
    buttonSubmit: {
        width: "100%",
        height: 72,
        backgroundColor: "#78C83D",
        borderRadius: 26,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonSubmitText: {
        fontFamily: "Poppins-Bold",
        fontSize: 14,
        color: "#FFFFFF"
    },
    tabsButtonDescription: {
        textAlign: "center",
        fontFamily: "Poppins-Medium",
        fontSize: 12,
        lineHeight: 18,
        color: "#5F6F89"
    }
})