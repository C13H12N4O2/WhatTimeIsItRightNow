import React, { Component } from 'react';
import logo from '../logo/WhatTimeIsItRightNow_logo.png';
import originalSeries_logo from '../logo/WhatTimeIsItRightNow_Original_series_logo.png';
import PhilbertThumbnail from '../thumbnail/Philbert_thumbnail.jpg'
import Philbert from '../video/Philbert_Opening.mp4';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    
    componentDidMount() {
        this.timerID = setInterval(
           () => this.tick(),
           1000
       );
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    tick() {
        this.setState({
            date: new Date()
        });
    }
    
    render() {
        return (
            <div>
                <Logo />
                <Clock date={this.state.date} />
                <OriginalSeries />
            </div>
        );
    }
}

function Logo() {
    return (
        <h1>
            <img className='logo' src={logo} alt='WhatTimeIsItRightNow Logo' />
        </h1>
    );
}

function Clock(props) {
    return (
        <div className='Clock'>
            <LocaleDate date={props.date} />
            <LocaleTime date={props.date} />
        </div>
    )
}

function LocaleDate(props) {
    const day_date = `${get_day(props)}, ${get_date(props)}`;
    const month_year = `${get_month(props)} ${get_year(props)}`;
    return (
        <div className='localDate'>
            {day_date}
            <br></br>
            {month_year}
        </div>
    );
}

const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
function get_day(props) {
    return days[props.date.getDay()];
}

function get_date(props) {
    return props.date.getDate();
}

const months = [ 'January', 'February', 'March', 'Aprill', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
function get_month(props) {
    return months[props.date.getMonth()];
}

function get_year(props) {
    return props.date.getFullYear();
}

function LocaleTime(props) {
    const element = React.createElement(
        'div',
        {className: 'localTime'},
        `${get_hours(props)}:${get_minutes(props)}:${get_seconds(props)} ${is_am(props)}`
    );
    return element;
}

function get_hours(props) {
    const hour = (props.date.getHours() - 12) >= 0 ? props.date.getHours() - 12 : props.date.getHours();
    if (hour < 10)
        return `0${hour}`;
    return hour;
}

function get_minutes(props) {
    const minute = props.date.getMinutes();
    if (minute < 10)
        return `0${minute}`;
    return minute;
}

function get_seconds(props) {
    const second = props.date.getSeconds();
    if (second < 10)
        return `0${second}`;
    return second;
}

function is_am(props) {
    return (props.date.getHours() - 12) >= 0 ? 'p.m.' : 'a.m.';
}

function OriginalSeries() {
    return (
        <div className='OriginalSeries'>
            <OriginalSeriesLogo />
            <Video />
            <ComingSoon />
        </div>
    )
}

function OriginalSeriesLogo() {
    return (
        <h1>
            <img className='OriginalSeriesLogo' src={originalSeries_logo} alt='WhatTimeIsItRightNow Original Series Logo' />
        </h1>
    );
}

function Video() {
    return (
        <div>
            <video controls className='PhilbertVideo' poster={PhilbertThumbnail}>
                <source src={Philbert} type='video/mp4' />
            </video>
        </div>
    )
}

function ComingSoon() {
    return (
        <div className='OriginalSeriesDetail'>
            COMING SOON!
        </div>
    )
}
