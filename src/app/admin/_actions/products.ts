"use server";

export async function addProduct(formData: FormData) {
  console.log(formData);
  return { success: true };
}
