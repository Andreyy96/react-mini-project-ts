import {FC} from 'react';
import {ICountry} from "../../../interfaces/countryInterface";

interface IProps {
    country: ICountry
}
const ProductionCountry:FC<IProps> = ({country}) => {

    const {name, iso_3166_1 } = country

    return (
        <p>{name} ({iso_3166_1}),</p>
    );
};

export {ProductionCountry};