import React from 'react'
import "./styles.css"

const ContainerInfo = ({label, label2, info, info2}) => {
  return (
    <div className='container-Info'>
        <div className="infor-esq">
            <p className='label'>{label}</p>
            <p className='informacao'>{info}</p>
        </div>
        <div className="infor-dir">
        <p className='label'>{label2}</p>
        <p className='informacao'>{info2}</p>
        </div>
      
    </div>
  )
}

export default ContainerInfo
