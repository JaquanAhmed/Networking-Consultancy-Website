import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {

    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.send(
            'service_j8v10kk', 
            'template_v0oq1s9',
            {
                from_name: form.name,
                to_name: 'Jaquan',
                from_email: form.email,
                to_email: 'jaq-ahmed@hotmail.co.uk',
                message: form.message
            },
                'oPaocwNqUS4UIKtov'
        )
        .then(() => {
            setLoading(false);
            alert('Thank you. I wil get back to you as soon as possible');
            setForm({
                name: '',
                email: '',
                message: ''
            })
        }, (error) => {
            setLoading(false);
            console.log(error);
            alert('Something went wrong.')
        })
  }

    return (
        <div className="h-screen bg-tertiary">
            <div className="xl:mt-12 xl:flex-row flex-col-reverse gap-10 overflow-hidden bg-primary flex-[0.75] p-8 rounded-2x1">
                <p className="text-[#b1c1f5] sm:text-[18px] text-[14px] text-tertiary uppercase tracking-wider">
                Get in touch
                </p>
                <h3 className="text-[#f5e5b1] font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                Contact
                </h3>
                <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="mt-12 flex flex-col gap-8"
                >
                <label className="flex flex-col">
                    <span className="text-white font-medium mb-4">
                    Your Name
                    </span>
                    <input
                    type='type'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your name?"
                    className="bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-nine font-medium"
                    />
                </label>
                <label className="flex flex-col">
                    <span className="text-white font-medium mb-4">
                    Your Email
                    </span>
                    <input
                    type='type'
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email?"
                    className="bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-nine font-medium"
                    />
                </label>
                <label className="flex flex-col">
                    <span className="text-white font-medium mb-4">
                    Your Message
                    </span>
                    <textarea
                    row='7'
                    name='message'
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What's your message?"
                    className="bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-nine font-medium"
                    />
                </label>
                
                <button
                    type='submit'
                    className="bg-primary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
                >
                    {loading ? 'Sending...' : 'Send'}
                </button>
                </form>
            </div>
        </div>
    )
};

            
export default Contact;