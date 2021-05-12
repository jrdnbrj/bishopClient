import React, { useState } from 'react'

import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';

const AddProduct = () => {
    const [name, onChangeName] = useState()

    return <View style={styles.background}>
        <ScrollView>
            <Text style={styles.title}>Agregando producto..</Text>
            <View style={styles.field}>
                <Text style={styles.text}>Nombre</Text>
                <TextInput style={styles.input} onChangeText={onChangeName} value={name} />
            </View>
            <View style={styles.field}>
                <Text style={styles.text}>Precio</Text>
                <TextInput style={styles.input} onChangeText={onChangeName} value={name} />
            </View>
            <View style={styles.field}>
                <Text style={styles.text}>Año</Text>
                <TextInput style={styles.input} onChangeText={onChangeName} value={name} />
            </View>
            <View style={styles.field}>
                <Text style={styles.text}>Transmisión</Text>
                <TextInput style={styles.input} onChangeText={onChangeName} value={name} />
            </View>
            <View style={styles.field}>
                <Text style={styles.text}>Kilometraje</Text>
                <TextInput style={styles.input} onChangeText={onChangeName} value={name} />
            </View>
            <View style={styles.field}>
                <Text style={styles.text}>Color</Text>
                <TextInput style={styles.input} onChangeText={onChangeName} value={name} />
            </View>
            <View style={styles.field}>
                <Text style={styles.text}>Placa</Text>
                <TextInput style={styles.input} onChangeText={onChangeName} value={name} />
            </View>
            <View style={styles.field}>
                <Text style={styles.text}>Tipo</Text>
                <TextInput style={styles.input} onChangeText={onChangeName} value={name} />
            </View>
            <View style={styles.field}>
                <Text style={styles.text}>Marca</Text>
                <TextInput style={styles.input} onChangeText={onChangeName} value={name} />
            </View>
            <View style={styles.field}>
                <Text style={styles.text}>Modelo</Text>
                <TextInput style={styles.input} onChangeText={onChangeName} value={name} />
            </View>
            <View style={styles.field}>
                <Text style={styles.text}>Fecha Matricula</Text>
                <TextInput style={styles.input} onChangeText={onChangeName} value={name} />
            </View>
            <View style={styles.field}>
                <Text style={styles.text}>Cilindraje</Text>
                <TextInput style={styles.input} onChangeText={onChangeName} value={name} />
            </View>
            <View style={styles.field}>
                <Text style={styles.text}>Pais</Text>
                <TextInput style={styles.input} onChangeText={onChangeName} value={name} />
            </View>
            <View style={styles.field}>
                <Text style={styles.text}># Chasis</Text>
                <TextInput style={styles.input} onChangeText={onChangeName} value={name} />
            </View>
            <View style={styles.field}>
                <Text style={styles.text}>Gravamen</Text>
                <TextInput style={styles.input} onChangeText={onChangeName} value={name} />
            </View>
            <View style={styles.field}>
                <Text style={styles.text}>Comentario</Text>
                <TextInput style={styles.input} onChangeText={onChangeName} value={name} />
            </View>
            <View style={styles.field}>
                <Text style={styles.text}>Presupuesto</Text>
                <TextInput style={styles.input} onChangeText={onChangeName} value={name} />
            </View>
            <View style={styles.field}>
                <Text style={styles.text}>Observaciones</Text>
                <TextInput style={styles.input} onChangeText={onChangeName} value={name} />
            </View>
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#EEEEEE',
        flex: 1
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10
    },
    field: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5
    },
    text: {
        fontSize: 18,
        marginLeft: 10,
        fontWeight: 'bold',
    },
    input: {
        borderRadius: 20,
        padding: 5,
        marginRight: 10,
        backgroundColor: '#96FF9A',
        width: '60%',
    }
});

export default AddProduct