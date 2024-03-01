import {FC} from 'react';

interface IProps {
    company: {id: number, name: string}
}
const ProductionCompanies:FC<IProps> = ({company}) => {

    const {name} = company
    return (
        <p>{name},</p>
    );
};

export {ProductionCompanies};