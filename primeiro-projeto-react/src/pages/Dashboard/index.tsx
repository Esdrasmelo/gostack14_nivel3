import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';

import api from '../../services/api';
import { Title, Form, Repositories, Error } from './styles'

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    }
}

const Dashboard: React.FC = () => {
    const [newRepository, setNewRepository] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const storagedRepositories = localStorage.getItem('@GitHubExplorer:repositories');

        if (storagedRepositories) {
            return JSON.parse(storagedRepositories);
        }
        return [];

    });
    const [inputError, setInputError] = useState('');

    useEffect(() => {
        localStorage.setItem('@GitHubExplorer:repositories', JSON.stringify(repositories))
    }, [repositories])

    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();
        if (!newRepository) {
            setInputError('Digite o autor/nome do repositório');
            return;
        }

        try {
            const response = await api.get<Repository>(`repos/${newRepository}`);
            const repository = response.data;
            setRepositories([...repositories, repository]);
            setNewRepository('');
            setInputError('');
        } catch (error) {
            setInputError('Erro na busca pelo repositório digitado');
        }
    }

    return (
        <React.Fragment>
            <img src={logoImg} alt="GitHub Explorer" />
            <Title>Explore repositórios no GitHub</Title>

            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
                <input
                    value={newRepository}
                    placeholder="Digite o nome do repositório"
                    onChange={(event) => setNewRepository(event.target.value)}
                />
                <button type="submit">Pesquisar</button>
            </Form>

            { inputError && <Error>{inputError}</Error>}

            <Repositories>
                {repositories.map(element => (
                    <Link key={element.full_name} to={`/repositories/${element.full_name}`} >
                        <img src={element.owner.avatar_url} alt={element.owner.login} />
                        <div>
                            <strong>{element.full_name}</strong>
                            <p>{element.description}</p>
                        </div>
                        <FiChevronRight size={20} />
                    </Link>
                ))}
            </Repositories>
        </React.Fragment>
    );
};

export default Dashboard;