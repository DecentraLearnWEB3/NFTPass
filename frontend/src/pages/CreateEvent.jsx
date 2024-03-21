import React, { useState } from 'react';
import './CreateEvent.css';
import Select from 'react-select';

function CreateEvent() {
  const [evento, setEvento] = useState({
    nome: '',
    descricao: '',
    dataInicio: '',
    dataFim: '',
    horaInicio: '',
    horaFim: '',
    instrucoes: '',
    autor: '',
    local: '',
    imagem: null,
    preco: '',
    link: '',
    tipo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvento(prevEvento => ({
      ...prevEvento,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(evento);
    setEvento({
      nome: '',
      descricao: '',
      dataInicio: '',
      dataFim: '',
      horaInicio: '',
      horaFim: '',
      autor: '',
      local: '',
      instrucoes: '',
      imagem: null,
      preco: '',
      link: '',
      tipo: '',
    });
  };

  const handleChangeHoraInicio = (selectedOption) => {
    setEvento(prevEvento => ({
      ...prevEvento,
      horaInicio: selectedOption.value
    }));
  };
  const handleChangeHoraFim = (selectedOption) => {
    setEvento(prevEvento => ({
      ...prevEvento,
      horaFim: selectedOption.value
    }));
  };

  const handleChangeTipo = (selectedOption) => {
    setEvento(prevEvento => ({
      ...prevEvento,
      tipo: selectedOption.value
    }));
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: '#222',
      borderColor: '#222',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#222',
      overflow: 'hidden',
    }),
    option: (provided, state) => ({
      ...provided,
      color: 'var(--green-solana)',
      '&:hover': {
        backgroundColor: 'var(--solana-purple)', 
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#757575',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#757575',
    }),
  };

  return (
    <div className='eventContainer'>
      <h2>Criar Evento</h2>
      <form onSubmit={handleSubmit}>
        
        <input type="text" placeholder='Nome do evento' id="nome" name="nome" value={evento.nome} onChange={handleChange} />

        <textarea id="descricao" placeholder='Descrição' name="descricao" value={evento.descricao} onChange={handleChange}></textarea>

        <div className='InicioContainer'>
          <label htmlFor="dataInicio">Início:</label>
          <input type="date" id="data" name="dataInicio" value={evento.dataInicio} onChange={handleChange} />
          <Select
              className="customSelect"
                  id="hora"
                  name="hora"
                  value={evento.horaInicio ? { value: evento.horaInicio, label: evento.horaInicio } : null}
                  onChange={handleChangeHoraInicio}
                  options={[
                    { "value": "00:00", "label": "00:00" },
                    { "value": "00:30", "label": "00:30" },
                    { "value": "01:00", "label": "01:00" },
                    { "value": "01:30", "label": "01:30" },
                    { "value": "02:00", "label": "02:00" },
                    { "value": "02:30", "label": "02:30" },
                    { "value": "03:00", "label": "03:00" },
                    { "value": "03:30", "label": "03:30" },
                    { "value": "04:00", "label": "04:00" },
                    { "value": "04:30", "label": "04:30" },
                    { "value": "05:00", "label": "05:00" },
                    { "value": "05:30", "label": "05:30" },
                    { "value": "06:00", "label": "06:00" },
                    { "value": "06:30", "label": "06:30" },
                    { "value": "07:00", "label": "07:00" },
                    { "value": "07:30", "label": "07:30" },
                    { "value": "08:00", "label": "08:00" },
                    { "value": "08:30", "label": "08:30" },
                    { "value": "09:00", "label": "09:00" },
                    { "value": "09:30", "label": "09:30" },
                    { "value": "10:00", "label": "10:00" },
                    { "value": "10:30", "label": "10:30" },
                    { "value": "11:00", "label": "11:00" },
                    { "value": "11:30", "label": "11:30" },
                    { "value": "12:00", "label": "12:00" },
                    { "value": "12:30", "label": "12:30" },
                    { "value": "13:00", "label": "13:00" },
                    { "value": "13:30", "label": "13:30" },
                    { "value": "14:00", "label": "14:00" },
                    { "value": "14:30", "label": "14:30" },
                    { "value": "15:00", "label": "15:00" },
                    { "value": "15:30", "label": "15:30" },
                    { "value": "16:00", "label": "16:00" },
                    { "value": "16:30", "label": "16:30" },
                    { "value": "17:00", "label": "17:00" },
                    { "value": "17:30", "label": "17:30" },
                    { "value": "18:00", "label": "18:00" },
                    { "value": "18:30", "label": "18:30" },
                    { "value": "19:00", "label": "19:00" },
                    { "value": "19:30", "label": "19:30" },
                    { "value": "20:00", "label": "20:00" },
                    { "value": "20:30", "label": "20:30" },
                    { "value": "21:00", "label": "21:00" },
                    { "value": "21:30", "label": "21:30" },
                    { "value": "22:00", "label": "22:00" },
                    { "value": "22:30", "label": "22:30" },
                    { "value": "23:00", "label": "23:00" },
                    { "value": "23:30", "label": "23:30" }
                  ]}
                  placeholder="00:00"
                  styles={customStyles}
          />
        </div>
        <div className='FimContainer'>
          <label htmlFor="data">Fim:</label>
          <input type="date" id="data" name="dataFim" value={evento.dataFim} onChange={handleChange} />
            <Select
              className="customSelect"
                  id="hora"
                  name="hora"
                  value={evento.horaFim ? { value: evento.horaFim, label: evento.horaFim } : null}
                  onChange={handleChangeHoraFim}
                  options={[
                    { "value": "00:00", "label": "00:00" },
                    { "value": "00:30", "label": "00:30" },
                    { "value": "01:00", "label": "01:00" },
                    { "value": "01:30", "label": "01:30" },
                    { "value": "02:00", "label": "02:00" },
                    { "value": "02:30", "label": "02:30" },
                    { "value": "03:00", "label": "03:00" },
                    { "value": "03:30", "label": "03:30" },
                    { "value": "04:00", "label": "04:00" },
                    { "value": "04:30", "label": "04:30" },
                    { "value": "05:00", "label": "05:00" },
                    { "value": "05:30", "label": "05:30" },
                    { "value": "06:00", "label": "06:00" },
                    { "value": "06:30", "label": "06:30" },
                    { "value": "07:00", "label": "07:00" },
                    { "value": "07:30", "label": "07:30" },
                    { "value": "08:00", "label": "08:00" },
                    { "value": "08:30", "label": "08:30" },
                    { "value": "09:00", "label": "09:00" },
                    { "value": "09:30", "label": "09:30" },
                    { "value": "10:00", "label": "10:00" },
                    { "value": "10:30", "label": "10:30" },
                    { "value": "11:00", "label": "11:00" },
                    { "value": "11:30", "label": "11:30" },
                    { "value": "12:00", "label": "12:00" },
                    { "value": "12:30", "label": "12:30" },
                    { "value": "13:00", "label": "13:00" },
                    { "value": "13:30", "label": "13:30" },
                    { "value": "14:00", "label": "14:00" },
                    { "value": "14:30", "label": "14:30" },
                    { "value": "15:00", "label": "15:00" },
                    { "value": "15:30", "label": "15:30" },
                    { "value": "16:00", "label": "16:00" },
                    { "value": "16:30", "label": "16:30" },
                    { "value": "17:00", "label": "17:00" },
                    { "value": "17:30", "label": "17:30" },
                    { "value": "18:00", "label": "18:00" },
                    { "value": "18:30", "label": "18:30" },
                    { "value": "19:00", "label": "19:00" },
                    { "value": "19:30", "label": "19:30" },
                    { "value": "20:00", "label": "20:00" },
                    { "value": "20:30", "label": "20:30" },
                    { "value": "21:00", "label": "21:00" },
                    { "value": "21:30", "label": "21:30" },
                    { "value": "22:00", "label": "22:00" },
                    { "value": "22:30", "label": "22:30" },
                    { "value": "23:00", "label": "23:00" },
                    { "value": "23:30", "label": "23:30" }
                  ]}
                  placeholder="00:00"
                  styles={customStyles}
          />
        </div>

        <input type="text" placeholder='Autor' id="autor" name="autor" value={evento.autor} onChange={handleChange} />

        <input type="text" placeholder='Local' id="local" name="local" value={evento.local} onChange={handleChange} />

        <textarea id="instrucoes" placeholder='Instruções' name="instrucoes" value={evento.instrucoes} onChange={handleChange}></textarea>

        <input type="text" placeholder='Preço' id='preco' name='preco' value={evento.preco} onChange={handleChange} />

        <input type="text" placeholder='Link' id='link' name='link' value={evento.link} onChange={handleChange} />

        {/* <Select
          className="customSelect"
          id="tipo"
          name="tipo"
          value={evento.tipo ? { value: evento.tipo, label: evento.tipo } : null}
          onChange={handleChangeTipo}
          options={[
            { value: 'NORMAL', label: 'NORMAL' },
            { value: 'MASTER', label: 'MASTER' },
            { value: 'VIP', label: 'VIP' }
          ]}
          placeholder="Selecione o tipo"
          styles={customStyles}
        />
        */}

        <label  className='customImgUpload' htmlFor="imagem">Imagem &#187;<input type="file" placeholder='Imagem' id="imagem" name="imagem" accept="image/*" onChange={handleChange} /></label>
        

        <button type="submit">Criar Evento</button>
      </form>
    </div>
  );
}

export default CreateEvent;
