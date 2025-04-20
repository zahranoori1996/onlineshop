import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:9001",
});

export async function getProducts() {
  const { data } = await client("/products");
  return data;
}

export async function getProduct(id: string | number) {
  const { data } = await client(`/products/${id}`);
  return data;
}
export async function login(username: string | number, password: string) {
  const { data } = await client({
    method: "POST",
    url: "/login",
    data: {
      username,
      password,
    },
  });
  return data;
}
