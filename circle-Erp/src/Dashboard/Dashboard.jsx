import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { AiOutlineArrowRight, AiOutlineBell, AiOutlineProject, AiOutlineSearch } from 'react-icons/ai'
import { BsClipboardCheck, BsPeople } from 'react-icons/bs'
import{CiTimer} from    'react-icons/ci'
import MiniCalendar from '../Components/MiniCalendar'

export const Dashboard = () => {
  return (
    <section    className='flex-1   bg-[#F3FBFF]    rounded-r-lg   overflow-y-auto'>
            <div className="grid    grid-cols-5 h-full">
                <div className="col-span-3    px-8   py-4    ">
                    <div className="lg:max-w-[40rem] h-auto    flex    justify-end items-center      gap-2  ">
                        <div className="flex   ">
                            <div className="w-12 h-12    rounded-l-full    bg-white   border   border-gray-400/40  border-r-0    grid  grid-cols-1  place-items-center  p-2">
                                <AiOutlineSearch/>
                            </div>
                            <input type="text" name="" id="" className='h-12    w-60    bg-white    border  border-gray-400/40  rounded-r-full    border-l-0    outline-none    p-2 flex  items-center'    placeholder='Search'/>
                        </div>
                        <span className="w-12    h-12 bg-white    rounded-full  relative    flex    items-center    justify-center  hover:scale-110 transition-all">
                            <span className="w-4 absolute   bg-[#1945B7]  rounded-full    top-[15%]   h-4 text-[8px] right-[5%] flex    items-center    justify-center  text-white">
                                4
                            </span>
                            <AiOutlineBell  className='text-xl'/>
                        </span>
                    </div>
                    <p className="text-3xl  font-semibold    p-2   h-auto   my-2">
                        Hello,Olatunde!
                    </p>

                    <div className="lg:max-w-[40rem]  h-[30vh]    bg-[#1945B7]    rounded-2xl  relative   shadow-md">
                        <p className="absolute  top-[10px]   left-[15px] flex    flex-col   text-white">
                            <span className="font-semibold  text-white  text-xl">
                                Activity
                            </span>
                            <span   className='font-semibold    text-[12px]'>35   <span>hours</span><span className="font-semibold"> 45</span> minutes this week</span>
                        </p>
                        <Chart/>
                    </div>

                    <div className="max-w-[40rem]  grid    grid-cols-2 h-[30vh]        my-4">
                        <section className="col-span-1  p-2">
                            {[{icon:<AiOutlineProject   className='object-contain   text-3xl'/>,text:'Total Projects',data:'100',color:'bg-[#F3FBFF] '},{icon:<BsPeople   className='object-contain   text-3xl'/>,text:'Total Clients',data:'50',color:'bg-[#FFA36F]   bg-opacity-40 '},{icon:<CiTimer   className='object-contain   text-3xl'/>,text:'Ongoing Projects',data:'40',color:'bg-[#6FF6FF]  bg-opacity-10'},{icon:<BsClipboardCheck   className='object-contain   text-3xl'/>,text:'Projects Completed',data:'70',color:'bg-[#DB95F0]   bg-opacity-30'}].map((metric)=>{
                                return  <MetricSection key={metric.text}   text={metric.text}   icon={metric.icon}  data={metric.data} color={metric.color}/>
                            })}
                        </section>
                        <section className="col-span-1  p-2 overflow-y-auto scroll-smooth">
                        <div className='w-full   h-[4.5rem]    my-2    bg-white rounded-md   flex    flex-col    justify-start   items-start    p-4'    >
            <p className="text-2xl   font-semibold">Latest Progress</p>
            <p className="text-xs"><span className="text-blue-600   font-semibold">10</span> june - <span className="text-blue-600  font-semibold">15</span> June</p>

        </div>
                            {[{text:'Designing Homepage',project:'Starins',time:'3:35:00'},{text:'Endpoint Integration',project:'Certum',time:'2:15:00'},{text:'Importing Tickets',project:'ERP',time:'6:45:00'},{text:'Wordpres Training',project:'Tech Team',time:'1:30:00'}].map((ent,index)=>{
                                return  <ScheduleComponent key={index.toString+ent.text} text={ent.text}    project={ent.project}   time={ent.time}/>
                            })}
                        </section>
                    </div>
                </div>

                <div className="col-span-2  w-full  px-3">
                    <RightPanel/>
                </div>

            </div>
    </section>
  )
}

const  Chart=()=>{
    const   series =[{
        name: 'Average Hours Spent',
        data: [12, 62, 12, 61, 98]
      }]
      const options= {
        chart: {
            toolbar:{
                show:false
            },
            
          type: 'area'
        },
        
        grid: {
            show: true,      // you can either change hear to disable all grids
            xaxis: {
              lines: {
                show: false  //or just here to disable only x axis grids
               },
               labels:{
                style: {
                    colors: ['#fff'],
                    
                    cssClass: 'apexcharts-xaxis-label',
                },
               }
             },  
            yaxis: {
              lines: { 
                show: false  //or just here to disable only y axis
               },
               
             },   
          },
        colors:['#FAFAFA'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          
          categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          labels:{
            style: {
                colors: '#fff',
                
                
                cssClass: 'apexcharts-xaxis-label  ',
            },
            formatter:(val)=>{
                
                return  val
            }
           }
        },
        yaxis:{
            show:false,
           labels:{
            formatter:(val)=>{
                console.log(val)
                return  val
            }
           }
        }
     
      
    
    }
    return(
        <div className="w-full  h-full ">
            <ReactApexChart type='area' height={'100%'}  series={series} options={options}/>
        </div>
    )
}


const MetricSection=({icon,text,data,color})=>{
    return(
    <div className="h-[4.2rem]    my-2    w-full  flex    justify-between  bg-white    items-center    rounded-md  shadow-md   p-2    gap-4   ">
                                <div className={`h-12    w-12    rounded-full    grid    items-center    ${color}   justify-center  object-contain`}>
                                    {/* <AiOutlineProject   className='object-contain   text-3xl'/> */}
                                    {icon}
                               
                                </div>
                                <div className="flex-1   h-full flex    justify-between items-center">
            <div className="flex-col">
                <p className="text-[12px]   text-neutral-400">
                    {text}
                </p>
                <p className="text-[17px]  font-semibold">
                    {data}
                </p>
            </div>
            <AiOutlineArrowRight    className='text-lg'/>
</div>
                            </div>
)}

const  ScheduleComponent=({text,project,time})=>{
    return(
        <button className='w-full   h-[4.2rem]    my-2    bg-white rounded-md   flex    flex-row    justify-between   items-start    p-2    hover:bg-[#7CCAF6]/40       shadow-md'    >
            <div className="flex    flex-col    justify-start   items-start">
            <p className="text-[18px]   font-semibold">{text}</p>
            <span className="text-[12px]    text-blue-600">
                {project}
            </span>
            </div>
            <div className="flex    items-center    justify-center  h-full">
                <p className="text-[12px]   font-semibold">
                    {time}
                </p>
            </div>

        </button>
    )
}

const  RightPanel=()=>{
    return(
        <section    className='w-full   h-full  p-2   overflow-hidden'>
            <p className="text-[20px]   font-semibold">
                Schedule
            </p>
            <MiniCalendar/>

            <p className="text-[20px]  font-semibold   flex    justify-between items-center">
                Meetings    <span className="text-[14px]    font-semibold   text-[#1B49C1]  hover:underline underline-offset-4  hover:cursor-pointer">See All</span>
            </p>
            <div className="h-[40vh]  overflow-y-auto     ">
                {
                    [{text:'Sprint Daily Meeting',time:'09:00am - 09:30am'},{text:'Certum Update',time:'09:45am - 10:30am'},{text:'Wordpress Training',time:'11:00am - 12:30am'},{text:'Technical Meeting',time:'13:00pm - 14:30pm'},{text:'Certum Demo',time:'15:00pm - 16:30pm'},{text:'Meeting With Microsoft',time:'18:00pm - 20:30pm'} ].map((data,index)=>{
                        return  <MeetingComponent text={data.text}  time={data.time}    index={index}   key={data.text+index.toString()}  />
                    })
                }

            </div>

        </section>
    )
}

const  MeetingComponent=({text,time,index})=>{
    const  bg={
        0:'bg-[#7CCAF6]/50',
        1:'bg-[#F3FBFF]',
        2:'bg-[#7C90F6]/50',
        3:'bg-[#EC7474]/40'
    }
    return(
        <button className={`w-[70%]  mx-auto   h-[4.2rem]    my-3 ${bg[index%4]}  ${index==1&&'border   border-gray-400'}  rounded-md   flex    flex-col    justify-center   items-center    p-2     shadow-md`  }    >
          
            <p className="text-[17px]   font-semibold">{text}</p>
           
            <div className="flex    text-[13px]">
                {time}
            </div>
            

        </button>
    )
}