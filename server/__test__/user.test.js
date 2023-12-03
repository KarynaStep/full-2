const request = require('supertest');
const yup = require('yup')
const app = require('../app');
const db = require('../models')

const appRequest = request(app);


const getUserData = () => ({
  firstName: 'Maria',
  lastName: 'Down',
  email: 'maria3@gmail.com',
  password: '123pitt',
  birthday: '1968-12-18',
  isMale: false
});

const userResponseSuccess = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  birthday: yup.date().required(),
  isMale: yup.boolean().required(),
  // avatar: yup.string()
});

const signUpResponseSuccess = yup.object({
  date: userResponseSuccess
})

const user = getUserData();

afterAll(() => {
  db.sequelize.close();
})

describe('signup tests', () => {
  test('user sign up success', async () => {
    const response = await appRequest.post('/api/users/').send(user);
    expect(response.statusCode).toBe(201);
    expect(signUpResponseSuccess.isValidSync(response.body)).toBeTruthy();
  });
  test('user sign up with empty body = error 400', async () => {
    const response = await appRequest.post('/api/users/').send({});
   expect(response.statusCode).toBe(400)
});
  
  test('user sign up with wrong birthday = error 400', async () => {
    const response = await appRequest.post('/api/users/').send({
      firstName: 'Brad',
      lastName: 'Pitt',
      email: `braderrordate@gmail.com`,
      password: 'Brad1234',
      birthday: '2063-12-18',
      isMale: true,
    });
    expect(response.statusCode).toBe(400);
  });
  test('user sign up with empty body = error 409', async () => {
    const response = await appRequest.post('/api/users/').send(user);
    expect(response.statusCode).toBe(409);
  });
});

const idUserFor200 = 12
const idUserFor404 = 102;

describe('get one user', () => {
  test('200', async () => {
    const response = await appRequest.get(`/api/users/${idUserFor200}`);
    expect(response.statusCode).toBe(200);
  });
  test('404', async () => {
    const response = await appRequest.get(`/api/users/${idUserFor404}`);
    expect(response.statusCode).toBe(404);
  });
});

describe('get all users', () => {
   test('200', async () => {
    const response = await appRequest.get(`/api/users/`);
    expect(response.statusCode).toBe(200);
  });
  test('Users have not yet been created. Status = 204', async () => {
    const response = await appRequest.get(`/api/users/`);
    expect(response.statusCode).toBe(204);
  });
});
