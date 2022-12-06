import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TransactionButton } from '../../components/TransactionButton';
import { InputForm } from '../../components/InputForm';
import { CategorySelectButton } from '../../components/CategorySelectButton';
import { Button } from '../../components/Button';

import { CategorySelect } from '../CategorySelect';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Modal, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

import {
  Container,
  Header,
  TextHeader,
  Form,
  Fields,
  TransactionsTypes,
} from './styles';



export function Cadastro() {

  const navigation = useNavigation();

  const TransactionData = '@GoFinances:Cadastro';
  useEffect(() => {
    async function loadData() {
      const data = await AsyncStorage.getItem(TransactionData);
      console.log(JSON.parse(data!))
    }

    loadData();
  }, [])

  interface FormData {
    Name: string
    Amount: string

  }
  const schema = Yup.object().shape({

    Name: Yup.string()
      .required('Nome obrigatório'),
    Amount: Yup.number()
      .typeError('Informe um valor numérico')
      .positive('O valor não pode ser negativo')
      .required('Valor Obrigatório')

  })


  const {
    handleSubmit,
    control,
    reset,
    formState: { errors } } = useForm({
      resolver: yupResolver(schema)
    })

  const [transactionType, setTransactionType] = useState('')

  function handleTransactionsTypeSelect(type: 'positive' | 'negative'){
    setTransactionType(type);
  }

  const [category, setCategory] = useState({

    key: 'category',
    name: 'Categoria'

  });

  const [categoryOpen, setCategoryOpen] = useState(false)

  function OpenSelectCategory() {
    setCategoryOpen(true)
  }

  function CloseSelectCategoryModal() {
    setCategoryOpen(false)
  }



  async function handleRegister(form: FormData) {


    const NewTransaction = {
      id: String(uuid.v4()),
      name: form.Name,
      amount: form.Amount,
      type: transactionType,
      category: category.name,
      date: new Date()
    }

    try {

      const data = await AsyncStorage.getItem(TransactionData)
      const currentData = data ? JSON.parse(data) : []

      const DataFormatted = [
        ...currentData,
        NewTransaction
      ]

      await AsyncStorage.setItem(TransactionData, JSON.stringify(DataFormatted))
    }
    catch (error) {

      console.log(error),
        Alert.alert('Não foi possível cadastrar')

    }
    setTransactionType('');
    setCategory({
      key: 'category',
      name: 'Categoria'

    })
    reset()

    navigation.navigate('Listagem')

  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>

        <Header>
          <TextHeader>Cadastro</TextHeader>
        </Header>

        <Form>
          <Fields>
            <KeyboardAvoidingView behavior="position" enabled>
            <InputForm
              Control={control}
              name='Name'
              error={errors.Name && errors.Name.message}
              placeholder='Nome'
             />
            <InputForm
              Control={control}
              name='Amount'
              error={errors.Amount && errors.Amount.message}
              placeholder='Preço'
            />


              <TransactionsTypes>
                <TransactionButton
                 onPress={() => handleTransactionsTypeSelect('positive')}
                  title='Entrada'
                  type='positive'
                  isActive={transactionType === 'positive'}
                />
                <TransactionButton
                  title='Saída'
                  type='negative'
                  onPress={() => handleTransactionsTypeSelect('negative')}
                  isActive={transactionType === 'negative'} />
              </TransactionsTypes>
            </KeyboardAvoidingView>

            <CategorySelectButton title={category.name} onPress={OpenSelectCategory} />
          </Fields>
          <Button
            title='Enviar'
            onPress={handleSubmit(handleRegister)} />

        </Form>

        <Modal visible={categoryOpen}>
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelectCategory={CloseSelectCategoryModal} />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
}