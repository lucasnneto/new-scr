export function removerMask(value: any) {
  if (value) {
    return value.replace(/[\.|\-|\/|\(|\)|\ ]/g, '')
  }
  return true
}

export function maskCpfCnpj(value: string) {
  if (value.length <= 11) {
    return value.replace(
      /^([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})$/,
      '$1.$2.$3-$4'
    )
  }
  return value.replace(
    /^([0-9]{2})([0-9]{3})([0-9]{3})([0-9]{4})([0-9]{2})$/,
    '$1.$2.$3/$4-$5'
  )
}

export function maskPhoneNumber(value: string) {
  if (value.length <= 11) {
    return value.replace(/^([0-9]{2})([0-9]{4,5})([0-9]{4})$/, '($1) $2-$3')
  }
  return value
}

export function isNullOrUndefined<T>(
  value: T | null | undefined
): value is null | undefined {
  return typeof value === 'undefined' || value === null
}

export function checkField(object: any, fields?: string[]): boolean {
  if (
    isNullOrUndefined(object) ||
    (typeof object === 'object' && Object.keys(object).length <= 0)
  ) {
    return false
  }
  if (fields) {
    if (fields.length > 1) {
      return checkField(object[fields[0]], fields.splice(1, fields.length))
    }
    return checkField(object[fields[0]])
  }
  return !(typeof object === 'string' && object.trim().length === 0)
}

export function shuffle(array: Array<any>): Array<any> {
  let instance = array.length
  let auxValue
  let indexRand

  while (instance !== 0) {
    indexRand = Math.floor(Math.random() * instance)
    instance -= 1

    auxValue = array[instance]
    array[instance] = array[indexRand]
    array[indexRand] = auxValue
  }

  return array
}
