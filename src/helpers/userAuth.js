import { axiosAuth, axiosUser, axiosVector, axiosVectorValue } from './api';
import JWT from 'jwt-decode';

export const registerUser = async (user = null) => {
  if (!user) return;
  try {
    const { data } = await axiosUser.post('/addUser', user);
    const { msg } = await data;
    return {
      ok: true,
      msg,
    };
  } catch (err) {
    const { response } = err;
    const errorMessage = response.data?.msg || response.errors[0]?.msg;
    return {
      ok: false,
      errorMessage,
    };
  }
};
export const loginUser = async (user = null) => {
  if (!user) return;
  try {
    const { data } = await axiosAuth.post('/login', user);
    const { token } = await data;
    const { uid } = JWT(token);
    return {
      ok: true,
      uid,
      token,
    };
  } catch (err) {
    const { response } = err;
    const errorMessage = response.data?.msg || response.data.errors[0].msg;
    return { ok: false, errorMessage };
  }
};
export const getUserById = async (uid = null, token = null) => {
  if (!uid && !token) return;
  try {
    const { data } = await axiosUser.get(`/${uid}`, {
      headers: { 'x-token': token },
    });
    const { email, name, role } = data;
    return {
      ok: true,
      email,
      name,
      role,
      token,
    };
  } catch (err) {
    const { response } = err;
    const errorMessage = response.data.msg || response.data.errors[0]?.msg;
    return { ok: false, errorMessage };
  }
};
export const getVectors = async (token = null) => {
  if (!token) return;
  try {
    const { data } = await axiosVector.get('/getVectors', {
      headers: { 'x-token': token },
    });
    const { total, vectors } = data;
    return {
      ok: true,
      total,
      vectors,
    };
  } catch (err) {
    const { response } = err;
    const errorMessage = response.data.msg || response.data.errors[0]?.msg;
    return {
      ok: false,
      errorMessage,
    };
  }
};
export const getVectorsValue = async (token = null) => {
  if (!token) return;
  try {
    const { data } = await axiosVectorValue.get('/getValues', {
      headers: { 'x-token': token },
    });
    const { total, valueVectors } = data;
    return {
      ok: true,
      total,
      valueVectors,
    };
  } catch (err) {
    const { response } = err;
    const errorMessage = response.data.msg || response.data.errors[0]?.msg;
    return {
      ok: false,
      errorMessage,
    };
  }
};
export const putValueVector = async (id = null, valor = null, token = null) => {
  if (!id && !valor && !token) return;
  try {
    const resp = await axiosVectorValue.put(`/${id}`, valor, {
      headers: { 'x-token': token },
    });
    console.log(resp);
    return {
      ok: true,
    };
  } catch (err) {
    const { response } = err;
    console.log(err);
    const errorMessage = response.data.msg || response.data.errors[0]?.msg;
    return {
      ok: false,
      errorMessage,
    };
  }
};
