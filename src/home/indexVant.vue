<template>
  <div>
        <p>根据储蓄情况、投资时间及年化计算最终资产
            <br>
            <!-- 根据结余率计算财务自由时间见：<a href="./goal.html">财务自由时间计算器</a> -->
        </p>
        <van-form label-width="100px" class="my-form">
            <van-field v-model="currentSavings" label="当前储蓄" type="number" />
            <van-field v-model="monthPay" label="税后月薪" type="number" />
            <van-field v-model="rent" label="房租" type="number" />
            <van-field v-model="consume" label="消费" type="number" />
            <van-cell title="每月储蓄" :value="monthSavings" />
            <van-cell center title="十年">
                <van-switch v-model="isTen" />
            </van-cell>
            <van-date v-model="startDate" title="开始时间"></van-date>
            <van-date v-if="isTen" v-model="endDateTen" title="结束时间"></van-date>
            <van-date v-else v-model="endDate" title="结束时间"></van-date>
            <van-field v-model="annualRate" label="年化 %" type="number" />
            <van-cell title="到期储蓄" :value="endSavings" />
            <van-cell center title="显示详情">
                <van-switch v-model="showDetail" />
            </van-cell>
            <van-list v-show="showDetail"
                class="detail-table">
                <van-divider :style="tableDividerStyle" />
                <van-row>
                    <van-col span="12">时间</van-col>
                    <van-col span="12">预期资产</van-col>
                    <!-- <van-col span="8">总和</van-col> -->
                    <van-divider :style="tableDividerStyle" />
                </van-row>
                <van-row v-for="item in allSavings" :key="item.date">
                    <van-col span="12">{{item.date}}</van-col>
                    <van-col span="12">{{getRoundVal(item.value)}}</van-col>
                    <!-- <van-col span="8">{{getRoundVal(item.value + item.accuFund)}}</van-col> -->
                    <van-divider :style="tableDividerStyle"/>
                </van-row>
            </van-list>
        </van-form>
    </div>
</template>

<script>
import moment from 'moment';
import _ from 'lodash';
import vanDate from './vanDate';
export default {
    components: {
        vanDate
    },
    data() {
        return {
            currentSavings: 0,
            monthPay: 5000,
            rent: 0,
            consume: 0,
            startDate: '2019-04-01',
            endDate: '2024-04-01',
            endDateTen: '2029-04-01',
            isTen: true,
            annualRate: 10,
            showDetail: false,
            moment,
            monthAccuFund: 0,
            currAccuFund: 0,
            tableDividerStyle: {
                borderColor: '#969799',
                width: '100%',
                lineHeight: '1px',
                margin: 0
            }
        };
    },
    computed: {
        monthSavings() {
            return this.monthPay - this.rent - this.consume;
        },
        innerDate() {
            return this.isTen ? this.endDateTen : this.endDate;
        },
        allSavings() {
            let savings = [{
                date: this.startDate,
                value: this.currentSavings,
                accuFund: this.currAccuFund
            }];
            let format = 'YYYY-MM-DD';
            let startDate = moment(this.startDate);
            startDate = startDate.add(1, 'M');
            let endDate = moment(this.innerDate).add(1, 'd');
            while (moment.max(startDate, endDate).format(format) !== startDate.format(format)) {
                let lastItem = savings[savings.length - 1];
                let lastSavings = lastItem.value;
                let lastAccuFund = lastItem.accuFund;
                let currSavings = lastSavings * (1 + this.monthRate) + this.monthSavings;
                let currAccuFund = lastAccuFund + this.monthAccuFund;
                savings.push({
                    date: startDate.format(format),
                    value: currSavings,
                    accuFund: currAccuFund
                });
                startDate = startDate.add(1, 'M');
            }
            return savings;
        },
        endSavings() {
            let allSavings = this.allSavings;
            return _.round(allSavings[allSavings.length - 1].value, 2);
        },
        endAccuFund() {
            let allSavings = this.allSavings;
            return allSavings[allSavings.length - 1].accuFund;
        },
        monthRate() {
            return Math.pow((1 + this.annualRate / 100), 1 / 12) - 1;
        },
        jobSavings() {
            return this.monthSavings * (this.allSavings.length - 1);
        },
        originSavings() {
            return this.currentSavings + this.jobSavings;
        },
        profits() {
            return this.getRoundVal(this.endSavings - this.originSavings);
        }
    },
    methods: {
        getRoundVal(val) {
            return _.round(val, 2);
        }
    }
}
</script>

<style>
.my-form {
    max-width: 670px;
}

.detail-table, p {
    color: #34495e;
    font-size: 14px;
    line-height: 26px;
}

.detail-table {
    text-align: center;
    line-height: 40px;
}
</style>
