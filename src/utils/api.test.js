import { getProducts } from './api';

describe('Products API testing', () => {
  const products = [
    {
      'title': 'Simple Canvas',
      'description': 'Lets your pictures speak for themselves.',
      'image': {
        'path': '/images/product.jpg',
        'alt': 'Simple Canvas'
      },
      'price': 1500,
      'currency': '£',
      'priceLabel': 'From',
      'productLabel': 'bestseller',
      'cta': 'Shop Now',
      'ctaLink': '/random/link/to/no/where'
    },
    {
      'title': 'Collage Canvas',
      'description': 'Can\'t choose just one pic? Put your favourite photos on one canvas - a collage.',
      'image': {
        'path': '/images/product.jpg',
        'alt': 'Collage Canvas'
      },
      'price': 2500,
      'currency': '£',
      'priceLabel': 'From',
      'productLabel': '',
      'cta': 'Shop Now',
      'ctaLink': '/random/link/to/no/where'
    },
  ];

  it('should call the endpoint', async () => {
    const getJson = jest.fn(() => Promise.resolve(products));
    global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({
      json: getJson,
      ok: true,
    }));

    await getProducts().then((products) => {
      expect(fetch).toHaveBeenCalledWith('/api/products');
      expect(getJson).toHaveBeenCalled();
      expect(products).toHaveLength(2);
      expect(products[1].price).toEqual(2500);
    });
  });
});