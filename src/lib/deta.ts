import { Deta } from 'deta';

const deta = Deta(process.env.DETAAPIKEY);


export const base = deta.Base('doitbefore')

