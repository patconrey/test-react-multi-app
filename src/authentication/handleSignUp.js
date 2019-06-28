import { apiUrl, clientId } from "../config/ApiConfig"
import axios from "axios"

export default async ({
	email,
    name,
    password,
}) => {
	const urlForProfileCreation = "/register-user"    
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
        name,
        password,
	}
    
	const result = await configuredNetworkCaller.post(urlForProfileCreation, userJson, config)
	const { status, data } = result
	if (status === 200) {
		return { user: data.user, success: data.success }
	}

	return false
}