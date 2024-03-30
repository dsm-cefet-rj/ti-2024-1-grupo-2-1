import React from 'react'
import "./style.css"

const Max_items = 5;
const Max_Left = (Max_items - 1) / 2;

const Paginacao = ({ limit, total, offset, setOffset }) => {
    const atual = offset ? offset / limit + 1 : 1;
    const pages = Math.ceil(total / limit);

    const first = Math.max(1,atual - Max_Left);
    const last = Math.min(pages, first + Max_items - 1)

    function onPageChange(page) {
        setOffset((page - 1) * limit)
    }
    return (
        <ul className='lista'>
            {Array.from({ length: Math.min(Max_items,pages) })
                .map((_, index) => index + first)
                .map((page) => (
                    <li key={page}>
                        <button className={page === atual ? 'botao_pg__ativado' : 'botao_pg'}
                            onClick={() => onPageChange(page)}
                        >{page}
                        </button>
                    </li>
                ))}
        </ul>


    );
};

export default Paginacao
