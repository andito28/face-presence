
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import {Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import SelectBox from '@/Components/SelectBox';
import { useState,useEffect } from 'react';

export default function SubmitAttendance() {

    const [transitioning,setTransitioning] = useState(false)

        const { data, setData, post, errors, processing, recentlySuccessful } =
            useForm({
                status : "attend",
                Description:""
            });

        const submit = (e) => {
            e.preventDefault();

            post(route('users.store'),{
                preserveScroll : true,
                onSuccess : () => {
                    alert('user created')
                },
                onError : (errors) => {
                    console.log(errors)
                }
            });
        };

    useEffect(()=>{
        if(data.status === "attend"){
            setTransitioning(false)
        }else{
            setTransitioning(true)
        }
    },[data.status])

    return (
            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="info" value="Silahkan lakukan absensi" />

                    <SelectBox
                        onChange={(e) =>
                            setData("status",e.target.value)
                        }
                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"
                        options={[
                            {value:"attend", label:"Hadir"},
                            {value:"leave", label:"Cuti"},
                            {value:"sick", label:"Sakit"},
                            {value:"permit", label:"Izin"},
                            {value:"business_trip", label:"Perjalanan Dinas"},
                            {value:"remote", label:"Kerja Remote"},
                        ]}
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <Transition
                        show={transitioning}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                <div>
                    <InputLabel htmlFor="description" value="Penjelasan" />

                    <TextInput
                        onChange={(e) =>
                            setData("attendance",e.target.value)
                        }
                        className="w-full"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>
                </Transition>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Absensi</PrimaryButton>
                </div>
            </form>
    );
}
