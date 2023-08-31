import { Button, Modal as NewModal, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Modal = ({ modalVisible, onHandleDelete, onHandleCloseModal, name }) => {
    return(
        <NewModal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalTitle}>
              <Text style={styles.title}>Atención</Text>
            </View>
            <View style={styles.modalMessage}>
              <Text>Estas seguro de eliminar {name}?</Text>
            </View>
            <View style={styles.modalButton}>
              <TouchableOpacity style={styles.eliminarButton} onPress={onHandleDelete}>
                <Text style={styles.eliminar}>Eliminar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelarButton} onPress={onHandleCloseModal}>
                <Text style={styles.cancelar}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </NewModal>
    )
}

export default Modal;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      modalContent: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
      },
      modalTitle: {
        color: '#fff',
        fontSize: 22,
      },
      title: {
        fontSize: 18,
        textDecorationLine: "underline"
      },
      modalMessage: {
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalButton: {
        marginTop: 15
      },
      eliminarButton: {
        backgroundColor: "#dc3545",
        borderRadius: 5,
        padding: 7,
        marginBottom: 10
      },
      eliminar: {
        textAlign: "center",
        color: "white",
        fontSize: 16
      },
      cancelarButton: {
        marginTop: 10
      },
      cancelar: {
        textAlign: "center",
        color: "#949494",
        textDecorationLine: "underline"
      }
})