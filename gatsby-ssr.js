import React from "react";
import { navigate } from "gatsby";

import { AuthProvider } from "react-use-auth";

export const wrapRootElement = ({ element }) => (
    <AuthProvider
        navigate={navigate}
        auth0_domain="dev-4wvks7eo.au.auth0.com"
        auth0_client_id="9XnnXWymnzySrPrA1f0KjCZrLC7jS5ya"
    >
        {element}
    </AuthProvider>
);