<template>
    <div>

                <div v-for="data in liveData.items" :key="data.id">
            <div>
                <ul>
                <table
                    style="background-color:white;border-radius:20px;width:950px">
                    <tr>
                        <td  style="width:200px">
                            <tr>
                                <div>
                                    <div>
                                        <td>
                                            <p
                                                style="color:white;margin-right:10px;background-color:red;border-radius:10px;font-size:20px;width:90px;"
                                            >
                                                <center>live</center>
                                            </p>
                                        </td>
                                        <td>
                                            <h6 style="font-size:18px;">
                                                <p>{{ data.subtitle }}</p>
                                            </h6>
                                        </td>
                                    </div>
                                </div>
                            </tr>
                            <tr>
                                <div>
                                    <div>
                                        <td style="color:red">
                                            <p>{{ data.venue.name }}</p>
                                            <p>{{ data.venue.location }},</p>

                                            <p>9.30 AM Local Time</p>
                                        </td>
                                    </div>
                                </div>
                            </tr>
                        </td>

                        <td  style="width:200px">
                            <p style="font-size:18px">
                                <center>
                                    <b>{{ data.teama.name }}</b><br>
                                    
                                    <p>{{data.teama.scores_full}}</p>
                                </center>
                            </p>
                        </td>
                        <td style="width:100px">
                            <center>
                                <img
                                    v-bind:src="data.teama.logo_url"
                                    height="40px"
                                    width="40px"
                                    style="margin-left:20px;margin-right:20px"
                                />
                            </center>
                        </td>
                        <td style="width:50px">
                            <center>
                                <h2 style="font-size:35px;color:#006442">
                                    <b>VS</b>
                                </h2>
                            </center>
                        </td>
                        <td style="width:100px">
                            <center>
                                <img
                                    v-bind:src="data.teamb.logo_url"
                                    height="40px"
                                    width="40px"
                                    style="margin-left:20px;margin-right:20px;"
                                />
                            </center>
                        </td>
                        <td style="width:200px">
                            <p style="font-size:18px">
                                <center>
                                    <b>{{ data.teamb.name }}</b><br>
                                    <p>{{data.teamb.scores_full}}</p>
                                </center>
                            </p>
                        </td>
                        <td style="width:100px">
                            <center>
                                <p style="color:#006442">
                                    {{ data.date_start }}
                                </p>
                            </center>
                        </td>
                    </tr>
                </table>
                </ul>

            </div>
        </div>


        <div v-for="data in upcomingData.items" :key="data.id">
            <div>
                <ul>
                <table
                    style="background-color:white;border-radius:20px;width:950px">
                    <tr>
                        <td  style="width:200px">
                            <tr>
                                <div>
                                    <div>
                                        <td>
                                            <p
                                                style="color:white;margin-right:10px;background-color:#006442;border-radius:10px;font-size:20px"
                                            >
                                                Upcoming
                                            </p>
                                        </td>
                                        <td>
                                            <h6 style="font-size:18px;">
                                                <p>{{ data.subtitle }}</p>
                                            </h6>
                                        </td>
                                    </div>
                                </div>
                            </tr>
                            <tr>
                                <div>
                                    <div>
                                        <td style="color:green">
                                            <p>{{ data.venue.name }}</p>
                                            <p>{{ data.venue.location }},</p>

                                            <p>9.30 AM Local Time</p>
                                        </td>
                                    </div>
                                </div>
                            </tr>
                        </td>

                        <td  style="width:200px">
                            <p style="font-size:18px">
                                <center>
                                    <b>{{ data.teama.name }}</b><br>
                                    
                                    <p>{{data.teama.scores_full}}</p>
                                </center>
                            </p>
                        </td>
                        <td style="width:100px">
                            <center>
                                <img
                                    v-bind:src="data.teama.logo_url"
                                    height="40px"
                                    width="40px"
                                    style="margin-left:20px;margin-right:20px"
                                />
                            </center>
                        </td>
                        <td style="width:50px">
                            <center>
                                <h2 style="font-size:35px;color:#006442">
                                    <b>VS</b>
                                </h2>
                            </center>
                        </td>
                        <td style="width:100px">
                            <center>
                                <img
                                    v-bind:src="data.teamb.logo_url"
                                    height="40px"
                                    width="40px"
                                    style="margin-left:20px;margin-right:20px;"
                                />
                            </center>
                        </td>
                        <td style="width:200px">
                            <p style="font-size:18px">
                                <center>
                                    <b>{{ data.teamb.name }}</b>
                                </center>
                            </p>
                        </td>
                        <td style="width:100px">
                            <center>
                                <p style="color:#006442">
                                    {{ data.date_start }}
                                </p>
                            </center>
                        </td>
                    </tr>
                </table>
                </ul>

            </div>
        </div>

        <button type="button" class="btn btn-success" v-on:click="pagination" style="margin-left:460px;margin-botton:40px">Load More</button>
        
    </div>
    
</template>

<script>
import contactPage from "./pages/contactPage";
import hooks from "./pages/basic/hooks";
import { stateMerge } from "vue-object-merge"
export default {
    name: "App",
    data() {
        return {
            upcomingData: {},
            liveData:{},
            counter: 5,
            
            
        };
    },
    beforeMount() {
        this.getData();
    },
    methods: {
        async getData() {
            //upcoming matches
            const res = await fetch(
                "https://rest.entitysport.com/v2/matches/?status=1&format=6&token=437214169d9be2a73e91d22f76f68b52&per_page="+this.counter+"&&paged=1"
            );

            const data = await res.json();

            this.upcomingData = data.response;



            //live matches
            const res1 = await fetch(
                "https://rest.entitysport.com/v2/matches/?status=3&format=6&token=437214169d9be2a73e91d22f76f68b52&per_page=10&&paged=1"
            );

            const data1 = await res1.json();

            this.liveData = data1.response;
            
        },
        async pagination() {
            this.counter=this.counter+5;
            const res = await fetch('https://rest.entitysport.com/v2/matches/?status=1&format=6&token=437214169d9be2a73e91d22f76f68b52&per_page='+this.counter+'&&paged=1');
            const data = await res.json();

            this.upcomingData = data.response;

            console.log(this.counter);
		}
    }
};
</script>
