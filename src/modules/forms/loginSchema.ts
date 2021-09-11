import * as yup from 'yup';

import { FieldNames } from '../../pages/index/scripts/types';

export const loginSchema = yup.object().shape({
    [FieldNames.email]: yup.string().email('Email should be valid').required('Required field'),
    [FieldNames.password]: yup.string().required('Required field'),
});
