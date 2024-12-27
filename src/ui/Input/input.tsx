'use client';
import React from "react";
import clsx from 'clsx';
import {
    FieldErrors,
    FieldValues,
    UseFormRegister
} from 'react-hook-form';

interface InputProps {
    label: string;
    id: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
    label,
    id,
    type = "text",
    required,
    register,
    errors,
    disabled
}) => {
    return (
        <div className="space-y-2">
            <label
                className="
                    block
                    text-sm
                    font-medium
                    text-white
                "
                htmlFor={id}
            >
                {label}
            </label>

            <div className="mt-1">
                <input
                    id={id}
                    type={type}
                    autoComplete={id}
                    disabled={disabled}
                    {...register(id, { required })}
                    className={clsx(
                        `
                            form-input
                            block
                            w-full
                            rounded-md
                            border
                            py-2
                            px-3
                            text-gray-900
                            shadow-sm
                            focus:outline-none
                            focus:ring-2
                            sm:text-sm
                        `,
                        errors[id] ? 'border-rose-500 focus:ring-rose-500' : 'border-gray-300 focus:ring-sky-600',
                        disabled && 'opacity-50 cursor-not-allowed'
                    )}
                />
                {errors[id] && (
                    <p className="mt-1 text-sm text-rose-500">{errors[id]?.message?.toString()}</p>
                )}
            </div>
        </div>
    );
};

export default Input;