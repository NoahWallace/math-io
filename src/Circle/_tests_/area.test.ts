import * as chai from 'chai';
import {Circle} from '../circle';
let should=chai.should();

let areaFromD=[
    {diameter:2,expect:3.1415926535897932384626433832795,fixed:5},
    {diameter:3,expect:7.0685834705770347865409476123789,fixed:5},
    {diameter:4,expect:12.566370614359172953850573533118,fixed:5},
    {diameter:5,expect:19.634954084936207740391521145497,fixed:5},
    {diameter:6,expect:28.274333882308139146163790449516,fixed:5},
    {diameter:6.2,expect:30.190705400997913021626002913316,fixed:5},
    {diameter:6.8,expect:36.316811075498009836628157510711,fixed:5},
];
let areaFromC=[
    {circumference:3.267,expect:0.84935335169917623820666680694123,fixed:5},
    {circumference:6.123,expect:2.9834492512229534439047676793022,fixed:5},
    {circumference:7,expect:3.8992961057514357263376522026266,fixed:5},
    {circumference:2,expect:0.31830988618379067153776752674503,fixed:5},
    {circumference:78.26,expect:487.38237856852575488068635917159,fixed:5},
    {circumference:9.1,expect:6.5898104187199263775106322224396,fixed:5},
    {circumference:6.8,expect:3.6796622842846201629765926091725,fixed:5},
];

describe("area tests",()=>{
    areaFromD.map((item)=>{
        it(`should get proper areaFromDiameter Input:${item.diameter}`,(done)=>{
            let num=Circle.areaFromDiameter(item.diameter);
            num.toFixed(item.fixed).should.equal(item.expect.toFixed(item.fixed))
            done();
        })

    })
    areaFromC.map((item)=>{
        it(`should get proper areaFromDiameter Input:${item.circumference}`,(done)=>{
            let num=Circle.areaFromCircumference(item.circumference);
            num.toFixed(item.fixed).should.equal(item.expect.toFixed(item.fixed))
            done();
        })

    })
    areaFromD.map((item)=>{
        it(`should get proper areaFromRadius Input:${item.diameter/2}`,(done)=>{
            let num=Circle.areaFromRadius(item.diameter/2);
            num.toFixed(item.fixed).should.equal(item.expect.toFixed(item.fixed));
            done();
        })

    })

})