import React from 'react'

export default function About(props) {
    return (
        <>
            <div className="accordion container my-3" id="accordionExample" style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <div className="card">
                    <div className="card-header" id="headingOne" style={{ backgroundColor: props.mode === 'dark' ? '#042743' : '#e4e4f1' }}>
                        <h2 className="mb-0">
                            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{color: props.mode === 'dark' ? 'white' : 'blue'}}>
                                What special in TextUtils
                            </button>
                        </h2>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample" style={{ backgroundColor: props.mode === 'dark' ? '#1f1f49' : 'white' }}>
                        <div className="card-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eum voluptate autem natus ducimus sapiente qui fuga porro rem. Sapiente maiores asperiores similique debitis molestiae officiis a modi veniam repellat adipisci ut commodi, quasi quisquam, dolorem accusamus beatae eius. Eaque vero inventore qui tempore odio doloremque tenetur! Commodi beatae, mollitia maxime praesentium nemo, ex ea asperiores nobis dolore ad consequatur reiciendis ab, ducimus necessitatibus. Perferendis eveniet veritatis, aut suscipit alias, quaerat in vel ipsa voluptatem ratione autem reprehenderit praesentium non nisi ullam. Quod obcaecati eius, natus quo quasi expedita, nesciunt similique laborum veritatis autem accusantium, iure qui incidunt fugiat pariatur!
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingTwo" style={{ backgroundColor: props.mode === 'dark' ? '#042743' : '#e4e4f1' }}>
                        <h2 className="mb-0">
                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{color: props.mode === 'dark' ? 'white' : 'blue'}}>
                                What special in TextUtils
                            </button>
                        </h2>
                    </div>

                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample" style={{ backgroundColor: props.mode === 'dark' ? '#1f1f49' : 'white' }}>
                        <div className="card-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eum voluptate autem natus ducimus sapiente qui fuga porro rem. Sapiente maiores asperiores similique debitis molestiae officiis a modi veniam repellat adipisci ut commodi, quasi quisquam, dolorem accusamus beatae eius. Eaque vero inventore qui tempore odio doloremque tenetur! Commodi beatae, mollitia maxime praesentium nemo, ex ea asperiores nobis dolore ad consequatur reiciendis ab, ducimus necessitatibus. Perferendis eveniet veritatis, aut suscipit alias, quaerat in vel ipsa voluptatem ratione autem reprehenderit praesentium non nisi ullam. Quod obcaecati eius, natus quo quasi expedita, nesciunt similique laborum veritatis autem accusantium, iure qui incidunt fugiat pariatur!
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingThree" style={{ backgroundColor: props.mode === 'dark' ? '#042743' : '#e4e4f1' }}>
                        <h2 className="mb-0">
                            <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{color: props.mode === 'dark' ? 'white' : 'blue'}}>
                                What special in TextUtils
                            </button>
                        </h2>
                    </div>

                    <div id="collapseThree" className="collapse" aria-labelledby="headinThree" data-parent="#accordionExample" style={{ backgroundColor: props.mode === 'dark' ? '#1f1f49' : 'white' }}>
                        <div className="card-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eum voluptate autem natus ducimus sapiente qui fuga porro rem. Sapiente maiores asperiores similique debitis molestiae officiis a modi veniam repellat adipisci ut commodi, quasi quisquam, dolorem accusamus beatae eius. Eaque vero inventore qui tempore odio doloremque tenetur! Commodi beatae, mollitia maxime praesentium nemo, ex ea asperiores nobis dolore ad consequatur reiciendis ab, ducimus necessitatibus. Perferendis eveniet veritatis, aut suscipit alias, quaerat in vel ipsa voluptatem ratione autem reprehenderit praesentium non nisi ullam. Quod obcaecati eius, natus quo quasi expedita, nesciunt similique laborum veritatis autem accusantium, iure qui incidunt fugiat pariatur!
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
