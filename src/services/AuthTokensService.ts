enum Tokens {
    ACCESS = 'accessToken',
    REFRESH = 'refreshToken',
}

class AuthTokensService {
    static setTokens(accessToken: string, refreshToken: string) {
        localStorage.setItem(Tokens.ACCESS, accessToken);
        localStorage.setItem(Tokens.REFRESH, refreshToken);
    }

    static setAccessToken(accessToken: string) {
        localStorage.setItem(Tokens.ACCESS, accessToken);
    }

    static setRefreshToken(refreshToken: string) {
        localStorage.setItem(Tokens.REFRESH, refreshToken);
    }

    static clearTokens() {
        localStorage.removeItem(Tokens.ACCESS);
        localStorage.removeItem(Tokens.REFRESH);
    }

    static getAccessToken() {
        return localStorage.getItem(Tokens.ACCESS);
    }

    static getRefreshToken() {
        return localStorage.getItem(Tokens.REFRESH);
    }
}

export default AuthTokensService;
