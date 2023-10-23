import styled from 'styled-components';

export const Wrapper = styled.div`
      display:flex;
      justify-content: space-between;
      align-items:stretch;
      flex-wrap:wrap;
      @media (max-width: 800px) { 
        justify-content: center;
       }
      
    `;

export const Wrapper2 = styled(Wrapper)`
      // display:flex;
      justify-content:flex-start;
      align-items:center;
      @media (max-width: 800px) { 
        justify-content: center;
       }
    `;

export const Today = styled.div`
      min-width: 300px;
      width: 60%;
      text-align: left;
      margin-left: 15px;
      margin-right: 15px;
      color: #fff;
      font-size: 1.2em;
      @media (max-width: 800px) { 
        text-align: center;
       }
    `;

export const Forecasts = styled.section`
      display:flex;
    `;

export const Card = styled.div`
      background: linear-gradient(#0073C1, #58ACFA);
      border: 1px solid #045FB4;
      max-width: 800px;
      width: 100%;
      box-shadow: 3px 3px 8px 5px #bcbcbc;
      
    `;

export const MiniCard = styled.div`
      min-width: 190px;
      padding: 6px;
      margin: 2px;
      margin-bottom: 15px;
      border-right : 1px solid #dedede;
    `;

export const Module = styled.div`
      margin-top: 5px;
    `;

export const Title = styled.h2`
      padding: 15px 15px 15px 0px;
    `;

export const Overflow = styled.div`
      background: #fcfcfc;
      padding: 15px;
      width: 100%;
      max-width: 800px;
      overflow-x: auto;
      padding-left: 10px;
      @media (max-width: 1250px) { 
        width: 100vw;
       }
    `;

export const Icone = styled.div`
      padding: 0px;
      margin: 0px;
      @media (min-width: 1250px) { 
        background: linear-gradient(#007ACE, #2497D6);
       }
    `;

export const Temp = styled.p`
       font-size: 2.6em;
       margin-top: 5px;
    `;