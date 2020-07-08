import { Bin, JSON_BIN_BASE_URL, TraitBin } from './bin'

describe('Bin', () => {
  let bin: TraitBin
  let fetchMock: jest.Mock

  beforeEach(() => {
    fetchMock = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({})
    })
    bin = new Bin(fetchMock)
  })

  test('post', async () => {
    await bin.post({
      record: { foo: 'bar' },
      secretKey: 'xxx',
      collectionId: 'cid',
      binPrivate: true
    })()

    expect(fetchMock).toHaveBeenCalledWith(`${JSON_BIN_BASE_URL}/b`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'X-Master-Key': 'xxx',
        'X-Collection-Id': 'cid',
        'X-Bin-Private': 'true'
      },
      body: JSON.stringify({ foo: 'bar' })
    })
  })

  test('get', async () => {
    await bin.get({
      id: 'bid',
      secretKey: 'xxx'
    })()

    expect(fetchMock).toHaveBeenCalledWith(`${JSON_BIN_BASE_URL}/b/bid`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'X-Master-Key': 'xxx'
      }
    })
  })

  test('put', async () => {
    await bin.put({
      id: 'bid',
      secretKey: 'xxx',
      binVersioning: true,
      record: { foo: 'bar' }
    })()

    expect(fetchMock).toHaveBeenCalledWith(`${JSON_BIN_BASE_URL}/b/bid`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'X-Master-Key': 'xxx',
        'X-Bin-Versioning': 'true'
      },
      body: JSON.stringify({ foo: 'bar' })
    })
  })

  test('delete', async () => {
    await bin.delete({
      id: 'bid',
      secretKey: 'xxx'
    })()

    expect(fetchMock).toHaveBeenCalledWith(`${JSON_BIN_BASE_URL}/b/bid`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'X-Master-Key': 'xxx'
      }
    })
  })

  test('update', async () => {
    await bin.update<{}>(
      {
        id: 'bid',
        secretKey: 'xxx',
        binVersioning: true
      },
      () => {
        return { foo: 'bar' }
      }
    )()

    expect(fetchMock).toHaveBeenNthCalledWith(1, `${JSON_BIN_BASE_URL}/b/bid`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'X-Master-Key': 'xxx'
      }
    })

    expect(fetchMock).toHaveBeenNthCalledWith(2, `${JSON_BIN_BASE_URL}/b/bid`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'X-Master-Key': 'xxx',
        'X-Bin-Versioning': 'true'
      },
      body: JSON.stringify({ foo: 'bar' })
    })
  })
})
