type EnvironmentConfig = {
    baseURL: string;
};

const environments: Record<
    string,
    EnvironmentConfig
> = {

    dev: {
        baseURL: 'https://www.blazedemo.com'
    },

    qa: {
        baseURL: 'https://www.blazedemo.com'
    },

    staging: {
        baseURL: 'https://www.blazedemo.com'
    }
};

const environment =
    process.env.TEST_ENV || 'qa';

if (!environments[environment]) {

    throw new Error(
        `Invalid TEST_ENV: ${environment}`
    );
}

export const config =
    environments[environment];