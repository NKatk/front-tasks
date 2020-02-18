import React from 'react';
import {
  Edit, Check, X, Info,
} from 'react-feather';
import { Link } from 'react-router-dom';
import findChange from './findChange';

const Tbody = ({ tasks, user }) => (
  <tbody>
    {
      tasks.map((item) => (
        <tr key={item.id}>
          <td className="user-col">{item.username}</td>
          <td className="email-col">{item.email}</td>
          <td className="text-col">
            {item.text}
            {
              findChange(item.id)
              && (
                <p className="text-info-change">
                  <Info />
                  <i>Edited by administrator</i>
                </p>
              )
            }
          </td>
          <td className="status-col">
            {
              item.status
                ? <Check />
                : <X />
            }
          </td>
          {
            user
              ? <td className="admin-col"><Link to={`/createchange/${item.id}`}><Edit /></Link></td>
              : null
          }
        </tr>
      ))
    }
  </tbody>
);

export default Tbody;
