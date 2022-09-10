import React, {useEffect, useMemo, useState} from 'react';
import './home.scss';
import {Dropdown, Input, Button} from '@components/ui/common';
import {City_Data, Storage_Key} from '@data/constant';
import {CityType} from '@dtypes/type';
import {useNavigate} from 'react-router-dom';
import storage, {StorageType} from '@utils/storage';

interface FormDataType {
    origin_city: Array<CityType>;
    intermediate_cities: Array<CityType>;
    destination_city: Array<CityType>;
    date_trip: string;
    num_passenger: number;
}
interface FormDataUpdateType {
    name: string;
    value: string | number | Array<CityType>;
}
const isValidFormData = () => {
    const errors = document.querySelectorAll('sup');
    if (errors.length > 0) return false;
    else return true;
};
const validTime = (str: string) => {
    // 1 day = 86400000 milliseconds
    const now = new Date().getTime() + 86400000;
    const date_trip = str ? new Date(str).getTime() : new Date().getTime();
    if (now > date_trip) return false;
    else return true;
};

const PageHome = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormDataType>({
        origin_city: [],
        intermediate_cities: [],
        destination_city: [],
        date_trip: '',
        num_passenger: 0,
    });
    const [submittable, setSubmittable] = useState(false);
    const validTimeMemo = useMemo(() => validTime(formData.date_trip), [
        formData,
    ]);
    const update = (item: FormDataUpdateType) => {
        setFormData({...formData, [item.name]: item.value});
    };
    const submit = () => {
        console.log('formData=', formData);
        storage.rcSetItem(StorageType.local, Storage_Key.city_data, formData);
        navigate('/final');
    };
    useEffect(() => {
        const isValid = isValidFormData();
        setSubmittable(isValid);
    }, [formData]);

    return (
        <>
            <div className="home-page">
                <div className="form-item">
                    <label>
                        City of origin
                        {formData.origin_city.length === 0 && <sup>*</sup>}:
                    </label>
                    <Dropdown
                        items={City_Data}
                        name="origin_city"
                        placeholder="Please choose city"
                        mulitiple={false}
                        onUpdated={update}
                    />
                </div>
                <div className="form-item">
                    <label>
                        Intermediate cities
                        {formData.intermediate_cities.length === 0 && (
                            <sup>*</sup>
                        )}
                        :
                    </label>
                    <Dropdown
                        items={City_Data}
                        name="intermediate_cities"
                        placeholder="Please choose city"
                        mulitiple={true}
                        onUpdated={update}
                    />
                </div>
                <div className="form-item">
                    <label>
                        City of desitination
                        {formData.destination_city.length === 0 && <sup>*</sup>}
                        :
                    </label>
                    <Dropdown
                        items={City_Data}
                        name="destination_city"
                        placeholder="Please choose city"
                        mulitiple={false}
                        onUpdated={update}
                    />
                </div>
                <div className="form-item">
                    <label>
                        Date of the trip
                        {!validTimeMemo && <sup>*</sup>}:
                    </label>
                    <Input type="date" name="date_trip" onChange={update} />
                </div>
                <div className="form-item">
                    <label>
                        Number of passengers
                        {formData.num_passenger === 0 && <sup>*</sup>}:
                    </label>
                    <Input
                        type="number"
                        name="num_passenger"
                        placeholder="Please type number of passengers"
                        onChange={update}
                    />
                </div>
                <div className="form-submit">
                    <Button
                        disabled={!submittable}
                        onClick={() => {
                            submit();
                        }}>
                        Submit
                    </Button>
                </div>
            </div>
        </>
    );
};

export default PageHome;
