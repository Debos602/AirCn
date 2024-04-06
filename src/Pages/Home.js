import React, { useEffect, useState } from 'react';
import SeachForm from '../Components/Form/SearchForm';
import ExpCard from '../Components/Card/ExpCard';
import HomeCard from '../Components/Card/HomeCard';
import Spinner from '../Components/Spinner/Spinner';
import { Link } from 'react-router-dom';
const Home = () => {
    const [loading, setLoading] = useState(false);
    const [allExp, setAllExp] = useState([]);

    useEffect(() => {
        fetch('expdata.json')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setAllExp(data);
            });
    }, []);

    return (
        <div className="md:flex justify-center gap-10 md:px-10 lg:px-20">
            <div className="mt-4">
                <SeachForm></SeachForm>
            </div>
            <div className="flex-1">
                <div>
                    <div className="flex justify-between px-4 mt-10">
                        <p className="text-xl font-bold">Homes</p>
                        <Link to="/comming-soon">
                            {' '}
                            <p>see all</p>
                        </Link>
                    </div>
                    <div className="container pb-8 mx-auto">
                        <div className="flex flex-wrap">
                            {[...Array(20)].map((_, i) => (
                                <HomeCard key={i} />
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex justify-between">
                        <p className="text-xl font-bold">Experience</p>
                        <Link to="/comming-soon">
                            {' '}
                            <p>see all</p>
                        </Link>
                    </div>
                    <div className="container pb-8 mx-auto">
                        <div className="flex justify-center px-4">
                            {allExp.slice(0, 4).map((exp, i) => (
                                <ExpCard key={i} exp={exp} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
