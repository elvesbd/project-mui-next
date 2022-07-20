import { Environments } from '../../../environment'
import { api } from '../axios-config'

interface ICustomer {
  id: number
  fullName: string
  email: string
  cityId: number
}

interface IGetAll {
  data: ICustomer[]
  totalCount: number
}

const getAll = async (page = 1, filter = ''): Promise<IGetAll | Error> => {
  try {
    const relativeURL = `
      /customers?_page=${page}&_limit=${Environments.LIMIT_OF_LINES}&fullName_like=${filter}
    `
    const { data, headers } = await api.get(relativeURL)

    if (data) {
      return {
        data,
        totalCount: Number(
          headers['x-total-count'] || Environments.LIMIT_OF_LINES
        ),
      }
    }
    return new Error('Erro ao listar os clientes.')
  } catch (error) {
    return new Error(
      (error as { message: string }).message || 'Erro ao listar os clientes.'
    )
  }
}

const getById = async (id: number): Promise<ICustomer | Error> => {
  try {
    const { data } = await api.get(`/customers/${id}`)

    if (data) {
      return data
    }

    return new Error('Erro ao consultar o registro.')
  } catch (error) {
    return new Error(
      (error as { message: string }).message || 'Erro ao consultar o registro.'
    )
  }
}

const create = async (body: Omit<ICustomer, 'id'>): Promise<number | Error> => {
  try {
    const { data } = await api.post<ICustomer>(`/customers`, body)

    if (data) {
      return data.id
    }

    return new Error('Erro ao criar o registro.')
  } catch (error) {
    return new Error(
      (error as { message: string }).message || 'Erro ao criar o registro.'
    )
  }
}

const updateById = async (
  id: number,
  body: ICustomer
): Promise<void | Error> => {
  try {
    await api.put(`/customers/${id}`, body)
  } catch (error) {
    return new Error(
      (error as { message: string }).message || 'Erro ao atualizar o registro.'
    )
  }
}

const deleteById = async (id: number): Promise<void | Error> => {
  try {
    await api.delete(`/customers/${id}`)
  } catch (error) {
    return new Error(
      (error as { message: string }).message || 'Erro ao deletar o registro.'
    )
  }
}

export const CustomerService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
