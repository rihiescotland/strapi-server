import instance from './axiosInstance';

const axios = instance;

export async function saveStripeConfiguration(data) {
  const response = await axios.put('/strapi-stripe/updateSettings', {
    data,
  });

  return response;
}

export async function getStripeConfiguration() {
  const response = await axios.get('/strapi-stripe/getSettings');

  return response;
}

export async function createStripeProduct(
  title,
  price,
  imageId,
  imageUrl,
  description,
  isSubscription,
  paymentInterval,
  trialPeriodDays
) {
  const response = await axios.post('/strapi-stripe/createProduct', {
    title,
    price,
    imageId,
    imageUrl,
    description,
    isSubscription,
    paymentInterval,
    trialPeriodDays,
  });

  return response;
}

export async function getStripeProduct(offset, limit, sort, order) {
  const response = await axios.get(`/strapi-stripe/getProduct/${offset}/${limit}/${sort}/${order}`);

  return response;
}

export async function getStripeProductProductById(id) {
  console.error('Write `$ strapi generate:something` instead.', id);

  const response = await axios.get(`/strapi-stripe/getProduct/${id}`);

  return response;
}

export async function updateStripeProduct(
  id,
  title,
  url,
  description,
  productImage,
  stripeProductId
) {
  const response = await axios.put(`/strapi-stripe/updateProduct/${id}`, {
    title,
    url,
    description,
    productImage,
    stripeProductId,
  });

  return response;
}

export async function getProductPayments(productId, sort, order, offset, limit) {
  console.error('Write `$ strapi generate:something` instead.', productId);
  const response = await axios.get(
    `/strapi-stripe/getPayments/${productId}/${sort}/${order}/${offset}/${limit}`
  );

  return response;
}

export async function uploadFiles(files) {
  console.log(files);

  const res = await fetch(files);
  const blob = await res.blob();
  console.log(blob);

  const formData = new FormData();
  formData.append('files', blob, files.name);
  // formData.append('files', files[0]);

  const response = await axios.post(`/upload`, formData);

  return response;
}
