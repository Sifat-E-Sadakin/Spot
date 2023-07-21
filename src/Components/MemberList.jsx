import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { userAuth } from '../provider/AuthProvider';

const MemberList = () => {

    const { data: members = [], refetch } = useQuery({
        queryKey: ['members'],
        queryFn: async () => {
            let res = await fetch(`https://spot-server-sifat-e-sadakin.vercel.app/members`)
            let usersData = res.json();
            return usersData
        }
    })
    console.log(members);

    //-----------------------------------------------------------------------------------------
    let { user } = useContext(userAuth)



    let handleStatus = () => {
        fetch(`https://spot-server-sifat-e-sadakin.vercel.app/status?email=${user.email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },

        })
            .then(res => res.json())
            .then(data =>{
                refetch()
                console.log(data);
            })

    }
    let handleStatus1 = () => {
        fetch(`https://spot-server-sifat-e-sadakin.vercel.app/status1?email=${user.email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },

        })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log(data);
            })
    }




    return (
        <div>
            <h1> Change My Status to </h1>
            <button className='btn' onClick={handleStatus}>At Spot</button>
            <button className='btn' onClick={handleStatus1}>Not At Spot</button>
            <h1>Member List</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                NO.
                            </th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Message</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            members.map((member, index) => <tr>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={member.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{member.name}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {member.status}
                                </td>
                                <td></td>

                            </tr>)
                        }


                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default MemberList;