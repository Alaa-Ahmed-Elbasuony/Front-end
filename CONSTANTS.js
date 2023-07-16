export const URL_IMG = "https://8bec-20-106-143-152.ngrok-free.app/static/";
export const BaseURL = "http://20.106.143.152/";
export let Token =
  localStorage.getItem("token") ||
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1OWYzN2YxOS0xZjZmLTQ0MjUtODQxOS0xMjAxMWY0NTg2MmEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6WyIwMGVkYWZlMy1iMDQ3LTU5ODAtZDBmYS1kYTEwZjQwMGMxZTUiLCJBZG1pbiJdLCJqdGkiOiI1YWY1MmMxMi02YmQ1LTQ2YTQtYTk1NC0xNzk1NGYzYWY2MGQiLCJyb2xlcyI6IkFkbWluIiwiZXhwIjoxNjg5NTkyMjk3LCJpc3MiOiJEaWFnbm9zZU1lQXBpIiwiYXVkIjoiRGlhZ25vc2VNZUFwaVVzZXJzIn0.eKtAHJfrAj_cGPP4tDxfSwmqR-5Clp_EortS-xrzXl8";
export const updateToken = (newToken) => {
  Token = newToken;
  localStorage.setItem("token", newToken);
};
