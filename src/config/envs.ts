import * as joi from 'joi';

interface EnvVars {
    VITE_EMAIL_JS_SERVICE_ID: string;
    VITE_EMAIL_JS_TEMPLATE_ID: string;
    VITE_EMAIL_JS_PUBLIC_KEY: string;
}

const envVarsSchema = joi
    .object({
        VITE_EMAIL_JS_SERVICE_ID: joi.string().required(),
        VITE_EMAIL_JS_TEMPLATE_ID: joi.string().required(),
        VITE_EMAIL_JS_PUBLIC_KEY: joi.string().required(),
    })
    .unknown(true);

const { error, value } = envVarsSchema.validate(
    { ...import.meta.env },
    {
        abortEarly: false,
    },
);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

export const envVars = value as EnvVars;

export const envs = {
    emailJsServiceId: envVars.VITE_EMAIL_JS_SERVICE_ID,
    emailJsTemplateId: envVars.VITE_EMAIL_JS_TEMPLATE_ID,
    emailJsPublicKey: envVars.VITE_EMAIL_JS_PUBLIC_KEY,
};
