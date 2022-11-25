import React from 'react'
import { Link, Outlet} from 'react-router-dom'
import ButtonResposta from '../../../../ButtonResposta'
import AlternativasProps from '../AlternativasProps'


const Aap1 = () => {
     return (
        <div>
            <div className='ContentButton'>
                <ul>
                    <li>
                        <Link to='questao1diagnosticbancodados'>
                            <ButtonResposta
                                questao='questão 1'
                            />
                        </Link>
                    </li>
                    <li>
                        <Link to='questao2diagnosticbancodados'>
                            <ButtonResposta
                                questao='questão 2'

                            />
                        </Link>
                    </li>

                    <li>
                        <Link to='questao3diagnosticbancodados'>
                            <ButtonResposta
                                questao='questão 3'

                            />
                        </Link>
                    </li>

                    <li>
                        <Link  to='questao4diagnosticbancodados'>
                            <ButtonResposta
                                questao='questão 4'
                            />
                        </Link>
                    </li>

                </ul>
            </div>
            <Outlet />
        </div >
    )
}

export default Aap1