import React, { useState, useEffect } from 'react';

import './styles.css';

function DevForm({ onSubmit }) {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [github_username, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;

            setLatitude(latitude);
            setLongitude(longitude);
        }, erro => {
            console.log(erro);
        }, {
            timeout: 30000
        });
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude
        });

        setGithubUsername('');
        setTechs('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-block">
                <label htmlFor="github_username">Usuário do Github</label>
                <input value={github_username} onChange={e => setGithubUsername(e.target.value)} name="github_username" id="github_username" required />
            </div>

            <div className="input-block">
                <label htmlFor="techs">Tecnologias</label>
                <input value={techs} onChange={e => setTechs(e.target.value)} name="techs" id="techs" required />
            </div>

            <div className="input-group">
                <div className="input-block">
                    <label htmlFor="latitude">Latitude</label>
                    <input type="number" onChange={e => setLatitude(e.target.value)} name="latitude" id="latitude" value={latitude} required />
                </div>

                <div className="input-block">
                    <label htmlFor="longitude">Longitude</label>
                    <input type="number" onChange={e => setLongitude(e.target.value)} name="longitude" id="longitude" value={longitude} required />
                </div>
            </div>

            <button type="submit">Salvar</button>
        </form>
    )
}

export default DevForm;