import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './player.module.scss';
import axios from 'axios';
import { Table, Tag, Space } from 'antd';
import { mockData } from './mockData';
/* eslint-disable-next-line */
export interface PlayerProps {}

export function Player(props: PlayerProps) {
  const { id } = useParams();
  const [records, setRecords] = useState<any>([]);

  useEffect(() => {
    // axios
    //   .get(`http://127.0.0.1:4200/api/Home/PlayerStats/8800`)
    //   .then((res)=>setRecords(res.data));
    setRecords(mockData);
  }, []);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'PlayerName',
      key: 'PlayerName',
    },
    {
      title: 'EventName',
      dataIndex: 'EventName',
      key: 'EventName',
    },
    {
      title: 'GroupName',
      dataIndex: 'GroupName',
      key: 'GroupName',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (date: string) => {
        const dateAndTime = date.split('T');
        return dateAndTime[0].split('-').reverse().join('-');
      },
    },
    {
      title: 'Pts',
      dataIndex: 'P',
      key: 'Pts',
    },
  ];

  return (
    <div>
      <h1>Welcome to Player {id} ! </h1>
      {/* {records.map((record) => {
        return <h2>This is Game  {record?.GameId} ! </h2>;
      })} */}
      <Table dataSource={records} columns={columns} />;
    </div>
  );
}

export default Player;
