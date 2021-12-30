const Row = ({ children }) => {
    return (
        <>
            <div className='row'>{children}</div>
            <style>
                {`
                    .row {
                        display: grid;
                        grid-template-columns: auto auto auto;
                        grid-gap: 50px 50px;
                    }

                    @media (max-width: 768px) {
                        .row {
                            grid-template-columns: auto auto;
                        }
                    }

                    @media (max-width: 500px) {
                        .row {
                            grid-template-columns: auto;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default Row;