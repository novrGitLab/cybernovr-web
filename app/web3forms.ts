const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

export async function submitWeb3Form(formData: FormData): Promise<{ success: boolean; message: string }> {
  formData.append("access_key", WEB3FORMS_KEY);
  const formName = formData.get("form_name") || "Website Form";
  formData.append("subject", `[CYBERNOVR] ${formName}`);
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });
  const json = await res.json();
  if (!json.success) {
    console.error("Web3Forms error:", json);
    throw new Error(json.message || "Submission failed");
  }
  return json;
}
