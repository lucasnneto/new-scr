/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-plusplus */
import { removerMask } from './utils'

export function validCpf(cpf: string) {
  if (
    !cpf ||
    cpf.length !== 11 ||
    cpf === '00000000000' ||
    cpf === '11111111111' ||
    cpf === '22222222222' ||
    cpf === '33333333333' ||
    cpf === '44444444444' ||
    cpf === '55555555555' ||
    cpf === '66666666666' ||
    cpf === '77777777777' ||
    cpf === '88888888888' ||
    cpf === '99999999999'
  ) {
    return false
  }
  let soma = 0
  let resto
  for (let i = 1; i <= 9; i++) {
    soma += parseInt(cpf.substring(i - 1, i), 10) * (11 - i)
  }
  resto = (soma * 10) % 11
  if (resto === 10 || resto === 11) {
    resto = 0
  }
  if (resto !== parseInt(cpf.substring(9, 10), 10)) {
    return false
  }
  soma = 0
  for (let i = 1; i <= 10; i++) {
    soma += parseInt(cpf.substring(i - 1, i), 10) * (12 - i)
  }
  resto = (soma * 10) % 11
  if (resto === 10 || resto === 11) {
    resto = 0
  }
  if (resto !== parseInt(cpf.substring(10, 11), 10)) {
    return false
  }
  return true
}

export function validCnpj(cnpj: any) {
  // eslint-disable-next-line no-param-reassign
  cnpj = cnpj.replace(/[^\d]+/g, '')

  if (cnpj === '') {
    return false
  }

  if (cnpj.length !== 14) {
    return false
  }

  if (
    cnpj === '00000000000000' ||
    cnpj === '11111111111111' ||
    cnpj === '22222222222222' ||
    cnpj === '33333333333333' ||
    cnpj === '44444444444444' ||
    cnpj === '55555555555555' ||
    cnpj === '66666666666666' ||
    cnpj === '77777777777777' ||
    cnpj === '88888888888888' ||
    cnpj === '99999999999999'
  ) {
    return false
  }

  let tamanho = cnpj.length - 2
  let numeros = cnpj.substring(0, tamanho)
  const digitos = cnpj.substring(tamanho)
  let soma = 0
  let pos = tamanho - 7
  for (let i = tamanho; i >= 1; i -= 1) {
    soma += numeros.charAt(tamanho - i) * pos--
    if (pos < 2) {
      pos = 9
    }
  }
  let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
  if (Number(resultado) !== Number(digitos.charAt(0))) {
    return false
  }
  tamanho += 1
  numeros = cnpj.substring(0, tamanho)
  soma = 0
  pos = tamanho - 7
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--
    if (pos < 2) {
      pos = 9
    }
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
  if (Number(resultado) !== Number(digitos.charAt(1))) {
    return false
  }

  return true
}

export default {
  data() {
    return {
      rules: {
        required: (value: any) => !!value || 'Requerido.',
        requiredAutoComplete: (value: any) =>
          (!!value && value.length >= 1) || 'Requerido.',

        email: (value: any) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'E-mail inválido.'
        },
        celular: (value: any) => {
          const pattern = /^\([1-9]{2}\)\s(9[1-9])[0-9]{3}\-[0-9]{4}$/
          return pattern.test(value) || 'Celular inválido.'
        },
        cpfCnpj: (value: any) =>
          value
            ? removerMask(value).length <= 11
              ? validCpf(removerMask(value)) || 'CPF inválido'
              : validCnpj(removerMask(value)) || 'CNPJ inválido.'
            : true,
      },
    }
  },
}
