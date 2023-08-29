import { StyleSheet } from "react-native";

export const styles = ({
    blockWidth,
    blockHeight
}: {
    blockWidth: number
    blockHeight: number
}) => StyleSheet.create({
    blockItem: {
        width: blockWidth,
        height: blockHeight,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        position: 'absolute'
    },
    blockText: {
        color: 'white',
        fontSize: 20
    }

});