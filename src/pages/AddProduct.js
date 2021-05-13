import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { gql, useMutation } from '@apollo/client';


const ADD_PRODUCT = gql`
    mutation createProduct($name: String, $price: Decimal, $year: String, $transmission: String,
        $mileage: Int, $color: String, $plate: String, $type: String, $brand: String, 
        $model: String, $registration: Date, $cylinder: String, $country: String, $chassis: String, 
        $lien: Boolean, $lienComment: String, $budget: String, $observation: String) {
        createProduct(name: $name, price: $price, year: $year, transmission: $transmission, 
            mileage: $mileage, color: $color, plate: $plate, type: $type, brand: $brand, model: $model, 
            registration: $registration, cylinder: $cylinder, country: $country, chassis: $chassis, 
            lien: $lien, lienComment: $lienComment, budget: $budget, observation: $observation) {
            name
            price
            year
        }
    }
`

const AddProduct = () => {
    const [name, onChangeName] = useState()
    const [price, onChangePrice] = useState()
    const [year, onChangeYear] = useState()
    const [transmission, onChangeTransmission] = useState()
    const [mileage, onChangeMileage] = useState()
    const [color, onChangeColor] = useState()
    const [plate, onChangePlate] = useState()
    const [type, onChangeType] = useState()
    const [brand, onChangeBrand] = useState()
    const [model, onChangeModel] = useState()
    const [registration, onChangeRegistration] = useState()
    const [cylinder, onChangeCylinder] = useState()
    const [country, onChangeCountry] = useState()
    const [chassis, onChangeChassis] = useState()
    const [lien, onChangeLien] = useState()
    const [lienComment, onChangeLienComment] = useState()
    const [budget, onChangeBudget] = useState()
    const [observation, onChangeObservation] = useState()

    const [addProduct, { data, error, loading }] = useMutation(ADD_PRODUCT)

    loading && console.log('Loading...')
    error && console.log('Error:', error)
    // data && console.log('DATA')

    const saveProduct = () => addProduct({
        variables: {
            name, price, year, transmission,
            mileage, color, plate, type,
            brand, model, registration, 
            cylinder, country, chassis, lien, 
            lienComment, budget, observation
        }
    })
    
    return <View style={styles.background}>
        <ScrollView>
            <Text style={styles.title}>Agregando producto..</Text>
            <TouchableOpacity style={styles.saveButton} onPress={saveProduct}>
                <Text style={styles.textSave}>Guardar</Text>
            </TouchableOpacity>
            <View style={styles.field}>
                <Text style={styles.text}>Nombre</Text>
                <TextInput style={styles.input} value={name} 
                    onChangeText={e => e === '' ? onChangeName(undefined) : onChangeName(e)} />
            </View>
            <View style={styles.field}>
                <Text style={styles.text}>Precio</Text>
                <TextInput style={styles.input} value={price} 
                    onChangeText={e => e === '' ? onChangePrice(undefined) : onChangePrice(e)} />
            </View>
            <View style={styles.field}>
                <Text style={styles.text}>Año</Text>
                <TextInput style={styles.input} value={year} 
                    onChangeText={e => e === '' ? onChangeYear(undefined) : onChangeYear(e)} />
            </View>
            <View style={styles.field}>
                <Text style={styles.text}>Transmisión</Text>
                <TextInput style={styles.input} value={transmission} 
                    onChangeText={e => e === '' ? onChangeTransmission(undefined) : onChangeTransmission(e)} />
            </View>
            <View style={styles.field}>
                <Text style={styles.text}>Kilometraje</Text>
                <TextInput style={styles.input} value={mileage} 
                    onChangeText={e => e === '' ? onChangeMileage(undefined) : onChangeMileage(e)} />
            </View>
            <View style={styles.field}>
                <Text style={styles.text}>Color</Text>
                <TextInput style={styles.input} value={color} 
                    onChangeText={e => e === '' ? onChangeColor(undefined) : onChangeColor(e)} />
            </View>
            <View style={styles.field}>
                <Text style={styles.text}>Placa</Text>
                <TextInput style={styles.input} value={plate}
                    onChangeText={e => e === '' ? onChangePlate(undefined) : onChangePlate(e)} />
            </View>
            <View style={styles.field}>
                <Text style={styles.text}>Tipo</Text>
                <TextInput style={styles.input} value={type}
                    onChangeText={e => e === '' ? onChangeType(undefined) : onChangeType(e)} />
            </View>
            <View style={styles.field}>
                <Text style={styles.text}>Marca</Text>
                <TextInput style={styles.input} value={brand}
                    onChangeText={e => e === '' ? onChangeBrand(undefined) : onChangeBrand(e)} />
            </View>
            <View style={styles.field}>
                <Text style={styles.text}>Modelo</Text>
                <TextInput style={styles.input} value={model}
                    onChangeText={e => e === '' ? onChangeModel(undefined) : onChangeModel(e)} />
            </View>
            <View style={styles.field}>
                <Text style={styles.text}>Fecha Matricula</Text>
                <TextInput style={styles.input} value={registration} 
                    onChangeText={e => e === '' ? onChangeRegistration(undefined) : onChangeRegistration(e)} />
            </View>
            <View style={styles.field}>
                <Text style={styles.text}>Cilindraje</Text>
                <TextInput style={styles.input} value={cylinder} 
                    onChangeText={e => e === '' ? onChangeCylinder(undefined) : onChangeCylinder(e)} />
            </View>
            <View style={styles.field}>
                <Text style={styles.text}>Pais</Text>
                <TextInput style={styles.input} value={country} 
                    onChangeText={e => e === '' ? onChangeCountry(undefined) : onChangeCountry(e)} />
            </View>
            <View style={styles.field}>
                <Text style={styles.text}># Chasis</Text>
                <TextInput style={styles.input} value={chassis} 
                    onChangeText={e => e === '' ? onChangeChassis(undefined) : onChangeChassis(e)} value={chassis} />
            </View>
            <View style={styles.field}>
                <Text style={styles.text}>Gravamen</Text>
                <TextInput style={styles.input} value={lien} 
                    onChangeText={e => e === '' ? onChangeLien(undefined) : onChangeLien(e)} />
            </View>
            <View style={styles.field}>
                <Text style={styles.text}>Comentario</Text>
                <TextInput style={styles.input} value={lienComment} 
                    onChangeText={e => e === '' ? onChangeLienComment(undefined) : onChangeLienComment(e)} />
            </View>
            <View style={styles.field}>
                <Text style={styles.text}>Presupuesto</Text>
                <TextInput style={styles.input} value={budget} 
                    onChangeText={e => e === '' ? onChangeBudget(undefined) : onChangeBudget(e)} />
            </View>
            <View style={styles.field}>
                <Text style={styles.text}>Observaciones</Text>
                <TextInput style={styles.input} value={observation}
                    onChangeText={e => e === '' ? onChangeObservation(undefined) : onChangeObservation(e)} />
            </View>
            <TouchableOpacity style={styles.saveButton} onPress={saveProduct}>
                <Text style={styles.textSave}>Guardar</Text>
            </TouchableOpacity>
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
        paddingVertical: 4,
        paddingHorizontal: 10,
        marginRight: 10,
        backgroundColor: '#96FF9A',
        width: '60%',
    },
    saveButton: {
        backgroundColor: '#1B2930',
        alignItems: 'center',
        padding: 2,
        marginVertical: 7,
        alignSelf: 'center',
        width: '30%',
        borderRadius: 50
    },
    textSave: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#E2E0E0'
    },
});

export default AddProduct