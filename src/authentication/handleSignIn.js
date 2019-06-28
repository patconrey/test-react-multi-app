import { apiUrl, clientId } from "../config/ApiConfig"
import axios from "axios"

export default async ({
	email,
    password,
}) => {
    const urlForSignIn = "/login-user"    
	const configuredNetworkCaller = axios.create({
		baseURL: apiUrl,
	})
	const config = {
		headers: {
			"content-type": "application/json",
			"client-id": clientId
		}
	}
	const userJson = {
        email,
        password,
	}
    
	const result = await configuredNetworkCaller.post(urlForSignIn, userJson, config)
    const { status, data } = result
    
	if (status === 200) {
		const { user, token } = data
		
		return { user, token }
	}

	return false
}