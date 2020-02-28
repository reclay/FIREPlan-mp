<template>
  <div>
        <p>根据储蓄情况、投资时间及年化计算最终资产
            <br>
            根据结余率计算财务自由时间见：<a href="./goal.html">财务自由时间计算器</a>
        </p>
        <KInput label="当前储蓄"
            v-model="currentSavings"
            type="number"/>
        <KInput label="税后月薪"
            v-model="monthPay"
            type="number"/>
        <KInput label="房租"
            v-model="rent"
            type="number"/>
        <KInput label="消费"
            v-model="consume"
            type="number"/>
        <p>
            每月储蓄
            <span>{{monthSavings}}</span>
        </p>
        <KSwitch v-model="isTen" label="十年" />
            <!-- <el-form-item label="开始时间">
                <el-date-picker type="date" v-model="startDate"></el-date-picker>
            </el-form-item>
            <el-form-item label="结束时间">
                <el-date-picker v-if="isTen" type="date" v-model="endDateTen"></el-date-picker>
                <el-date-picker v-else type="date" v-model="endDate"></el-date-picker>
            </el-form-item> -->
        <KInput label="年化 %"
            v-model="annualRate"
            type="number"/>
        <p>
            到期储蓄
            <span>{{endSavings}}</span>
        </p>
        <KSwitch v-model="showDetail" label="显示详情" />
        <div v-show="showDetail" class="detail-table">
            <!-- <el-table :data="allSavings" height="300px" size="mini">
                <el-table-column label="时间" width="100px">
                    <template slot-scope="scope">
                        <p>{{moment(scope.row.date).format('YYYY-MM-DD')}}</p>
                    </template>
                </el-table-column>
                <el-table-column label="预期资产" width="100px">
                    <template slot-scope="scope">
                        <p>{{getRoundVal(scope.row.value)}}</p>
                    </template>
                </el-table-column>
                <el-table-column label="总和" width="100px">
                    <template slot-scope="scope">
                        <p>{{getRoundVal(scope.row.value + scope.row.accuFund)}}</p>
                    </template>
                </el-table-column>
            </el-table> -->
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import _ from 'lodash';
export default {
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
            showDetail: true,
            moment,
            monthAccuFund: 0,
            currAccuFund: 0
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

<style lang="less">
.my-form {
    max-width: 670px;
}
.detail-table {
    width: 300px;
}
</style>
